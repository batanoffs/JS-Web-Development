import { html, render } from "./node_modules/lit-html/lit-html.js";

const URL = "http://localhost:3030/jsonstore/collections/books/";
const body = document.querySelector("body");
let titleEdit;
let authorEdit;
let isClicked = false;

async function getBooks() {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        const books = Object.values(data);
        return books;
    } catch (error) {
        console.error('Error occurred while fetching or parsing data:', error);
    }
}

const template = () => html` <button id="loadBooks" @click=${loadBooks}>
        LOAD ALL BOOKS
    </button>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>

    <form
        id=${isClicked ? "edit-form" : "add-form"}
        @submit=${isClicked ? onSave : onSubmit}
    >
        <h3>${isClicked ? "Edit book" : "Add book"}</h3>
        <label>TITLE</label>
        <input
            type="text"
            name="title"
            value=${isClicked ? titleEdit : ""}
            placeholder=${isClicked ? "" : "Title..."}
        />
        <label>AUTHOR</label>
        <input
            type="text"
            name="author"
            value=${isClicked ? authorEdit : ""}
            placeholder=${isClicked ? "" : "Author..."}
        />
        <input type="submit" value=${isClicked ? "Save" : "Submit"} />
    </form>`;

//edit function onSubmit to use try catch
async function onSubmit(event) {
    try {
        event.preventDefault();
        const formData = new FormData(event.target);
        const title = formData.get("title");
        const author = formData.get("author");
        if (title == "" || author == "") {
            return new Error("All fields are required!");
        }
        const book = {
            title,
            author,
        };

        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(book),
        });
        event.target.reset();
        loadBooks();
        render(template(), body);
    } catch (error) {
        console.error(error);
    }
}

async function loadBooks() {
    const books = await getBooks();
    const tbody = document.querySelector("tbody");
    const result = books.map(
        (book) => html` <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>
                <button @click=${editTemplate}>Edit</button>
                <button @click=${deleteTemplate}>Delete</button>
            </td>
        </tr>`
    );
    render(result, tbody);
}
async function onSave(event) {
    try {
        event.preventDefault();
        const formData = new FormData(event.target);
        const title = formData.get("title");
        const author = formData.get("author");
        if (title == "" || author == "") {
            return new Error("All fields are required!");
        }
        const book = {
            author: author,
            title: title
        };

        await fetch(URL + "id", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(book),
        });

        event.target.reset();
        loadBooks();
        render(template(), body);
    } catch (error) {
        console.error(error);
    }
}

function editTemplate(event) {
    const element = event.target.parentNode.parentNode;
    titleEdit = element.children[0].textContent;
    authorEdit = element.children[1].textContent;
    isClicked = true;
    render(template(), body);
}
render(template(), body);

function deleteTemplate(event) {
    const element = event.target.parentNode.parentNode;
    element.remove();
}
