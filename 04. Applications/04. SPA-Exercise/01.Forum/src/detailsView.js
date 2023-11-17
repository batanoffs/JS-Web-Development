const TOPIC_URI = "http://localhost:3030/jsonstore/collections/myboard/posts/";
const COMMENTS_URI =
    "http://localhost:3030/jsonstore/collections/myboard/comments";
const main = document.querySelector("main");
const section = document.querySelector("#comments");
const createCommentFormContainer = document.querySelector("div.answer-comment");
const form = createCommentFormContainer.querySelector("form");

form.addEventListener("submit", onSubmit);
createCommentFormContainer.remove();

let id = "";
section.remove();

export async function showDetails(ev) {
    try {
        id = ev ? ev.target.parentElement.dataset.id : id;
        const topic = await getTopic(id);
        const comments = await getAllCommentsById();
        const div = document.createElement("div");
        div.setAttribute("class", "comment");
        const topicElement = createTopicTemp(topic);
        div.appendChild(topicElement);
        Object.values(comments).forEach((comment) => {
            const commentElement = createCommentTemp(comment);
            div.appendChild(commentElement);
        });

        section.replaceChildren(div);
        section.appendChild(createCommentFormContainer);

        main.replaceChildren(section);
    } catch (error) {
        console.error("Error:", error);
    }
}
async function onSubmit(ev) {
    ev.preventDefault();
    try {
        const formData = new FormData(ev.target);
        const userName = formData.get("username");
        const postText = formData.get("postText");
        const date = new Date().getTime();

        createComment({ postText, userName, _topicId: id, date });
        showDetails();
    } catch (error) {
        console.error("Error creating comment:", error);
        // Handle the error here
    }
}
async function createComment(data) {
    try {
        const response = await fetch(COMMENTS_URI, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    } catch (error) {
        console.error("Error creating comment:", error);
        // Handle the error here
    }
}
async function getTopic(id) {
    try{
    const response = await fetch(TOPIC_URI + id);
    const data = await response.json();
    return data;
    } catch (error) {
        console.error("Error fetching topic:", error);
    }
}
// add try catch to getAllComments
async function getAllCommentsById() {
    try {
        const response = await fetch(COMMENTS_URI);
        const data = await response.json();
        return Object.values(data).filter((x) => x._topicId === id);
    } catch (error) {
        console.error("Error fetching comments:", error);
        // Handle the error here
    }
}
// async function getAllCommentsById() {
//     const response = await fetch(COMMENTS_URI);
//     const data = await response.json();
//     return Object.values(data).filter((x) => x._topicId === id);
// }
function createTopicTemp(data) {
    const date = new Date(data.createData);
    const dateString = `${date.getFullYear()}-${
        date.getMonth() + 1
    }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    const div = document.createElement("div");
    div.classList.add("header");
    div.innerHTML = `<div class="header">
    <img src="./static/profile.png" alt="avatar">
    <p><span>${data.userName}</span> posted on <time>${dateString}</time></p>

    <p class="post-content">${date.postText}</p>
    </div>`;
    return div;
}

function createCommentTemp(data) {
    const date = new Date(data.date);
    const dateString = `${
        date.getMonth() + 1
    }/${date.getDate()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    const div = document.createElement("div");
    div.id = "user-comment";
    div.innerHTML = `<div class="topic-name-wrapper">
        <div class="topic-name">
            <p><strong>${data.username}</strong> commented on <time>${dateString}</time></p>
            <div class="post-content">
                <p>${data.postText}.</p>
            </div>
        </div>`;
    return div;
}
