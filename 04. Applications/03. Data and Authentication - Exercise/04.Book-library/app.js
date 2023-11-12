const loadBtn = document.querySelector("#loadBooks");
const form = document.querySelector("form");
const tbody = document.querySelector("tbody");
const titleInput = document.querySelector(`input[name="title"]`);
const authorInput = document.querySelector(`input[name="author"]`);

let allRecords = {};

const URL = "http://localhost:3030/jsonstore/collections/books";

loadBtn.addEventListener("click", loadBooks);
form.addEventListener("submit", onSubmit);
async function loadBooks() {
    const response = await fetch(URL);
    const data = await response.json();
    const values = Object.values(data);
    // allRecords = values.filter((x) => x.title);
    // debugger
    // implement the code to correspond to the test in /tests/e2e.test.js
    allRecords = values.filter((x) => x.title);
    tbody.innerHTML = "";
    allRecords.forEach((x) => {
        const tr = document.createElement("tr");
        const tdTitle = document.createElement("td");
        const tdAuthor = document.createElement("td");
        const tdActions = document.createElement("td");
        const editBtn = document.createElement("button");
        const deleteBtn = document.createElement("button");

        tdTitle.textContent = x.title;
        tdAuthor.textContent = x.author;
        editBtn.textContent = "Edit";
        deleteBtn.textContent = "Delete";
        editBtn.addEventListener("click", edit);
        deleteBtn.addEventListener("click", remove);
        tdActions.append(editBtn, deleteBtn);
        tr.append(tdTitle, tdAuthor, tdActions);
        tbody.appendChild(tr);
    });
}
function edit(event) {
    const parent = event.target.parentElement.parentElement;
    const [eventTitle, eventAuthor] = parent.children;
    titleInput.value = eventTitle.textContent;
    authorInput.value = eventAuthor.textContent;
}
function remove(event) {
    event.target.parentElement.parentElement.remove();
}

async function onSubmit(event) {
    event.preventDefault();
    try {
        const books = new FormData(form);
        let title = books.get("title");
        let author = books.get("author");
        const respon = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                author,
            }),
        });
        const data = await respon.json();
        titleInput.value = "";
        authorInput.value = "";
    } catch (error) {
        console.log(error);
    }
}
