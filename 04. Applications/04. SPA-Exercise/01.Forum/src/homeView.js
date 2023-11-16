import { showDetails } from "./detailsView.js";
const URL = "http://localhost:3030/jsonstore/collections/myboard/posts"

const main = document.querySelector("main");
const topicContent = document.querySelector("div.topic-title");
const section = document.querySelector("div.new-topic-border");
const form = section.querySelector("form");
const cancel = document.querySelector(".cancel");
cancel.addEventListener("click", clearForm)
form.addEventListener("submit", onSubmit);
section.remove();

export async function showHome(event) {
    event?.preventDefault(); // ev && ev.preventDefault()
    topicContent.innerHTML = "" 
    const topics = await getAllTopics();
    Object.values(topics).forEach(topic => {
        const temp = createTopicTemp(topic);
        topicContent.appendChild(temp);
    })

    // topicContent.innerHTML = createTopicTemp();

    topicContent.querySelector("a")?.addEventListener("click", showDetails);

    main.replaceChild(section);
    main.appendChild(topicContent);
}
function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(e.target)
    console.log(...formData.entries());

    const topicName = formData.get("topicName");
    const username = formData.get("username");
    const postText = formData.get("postText"); 
    const createData = new Date().getTime(); 

    createTopic({topicName, username, postText, createData});
}

async function getAllTopics () {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}

async function createTopic (data) {
    const response = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    clearForm();
    showHome();
}

function clearForm(event) {
    event?.preventDefault();
    form.reset();
    
}

function createTopicTemp (topic) {
    const div = document.createElement("div");
    div.classList.add("topic-container");
    div.innerHTML = `
    <div class="topic-name-wrapper">
        <div class="topic-name">
            <a href="#" class="normal" data-id="${topic._id}">
                <h2>${topic.topicName}</h2>
            </a>
            <div class="columns">
                <div>
                    <p>Date: <time>${new Date(topic.createData).toISOString()}</time></p>
                    <div class="nick-name">
                        <p>Username: <span>${topic.username}</span></p>
                    </div>
                </div>


            </div>
        </div>
    </div>`
    return div;
}
