import { showDetails } from "./detailsView.js";
const URL = "http://localhost:3030/jsonstore/collections/myboard/posts";

const main = document.querySelector("main");
const topicContent = document.querySelector("div.topic-title");
const section = document.querySelector("div.new-topic-border");
const form = section.querySelector("form");
const cancel = document.querySelector(".cancel");
cancel.addEventListener("click", clearForm);
form.addEventListener("submit", onSubmit);

section.remove();

export async function showHome(event) {
    try {
        event?.preventDefault(); // ev && ev.preventDefault()
        topicContent.innerHTML = "";
        const topics = await getAllTopics();
        Object.values(topics).forEach((topic) => {
            const temp = createTopicTemp(topic);
            topicContent.appendChild(temp);
        });

        topicContent.querySelector("a")?.addEventListener("click", showDetails);

        main.replaceChildren(section);
        main.appendChild(topicContent);
    } catch (error) {
        console.error("Error:", error);
    }
}
function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(...formData.entries());

    const topicName = formData.get("topicName");
    const username = formData.get("username");
    const postText = formData.get("postText");
    const createData = new Date().getTime();

    createTopic({ topicName, username, postText, createData });
}

async function getAllTopics() {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching topics:", error);
    }
}

async function createTopic(data) {
    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        clearForm();
        showHome();
    } catch (error) {
        console.error("Error creating topic:", error);
    }
}

function clearForm(event) {
    event?.preventDefault();
    form.reset();
}

function createTopicTemp(topic) {
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
                    <p>Date: <time>${new Date(
                        topic.createData
                    ).toISOString()}</time></p>
                    <div class="nick-name">
                        <p>Username: <span>${topic.username}</span></p>
                    </div>
                </div>


            </div>
        </div>
    </div>`;
    return div;
}
