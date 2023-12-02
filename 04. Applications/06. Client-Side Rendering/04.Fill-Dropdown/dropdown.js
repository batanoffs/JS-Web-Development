import { html, render } from "./node_modules/lit-html/lit-html.js";

const URL = "http://localhost:3030/jsonstore/advanced/dropdown";
const select = document.getElementById("menu");
const form = document.querySelector("form");

form.addEventListener("submit", addItem);

const response = await fetch(URL);
const data = await response.json();
const items = Object.values(data);

console.log(items);

const template = (data) => html`
    ${data.map(
        (item) => html`<option value="${item._id}">${item.text}</option>`
    )}
`;

render(template(items), select);

async function addItem(e) {
    e.preventDefault();
    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                text: document.getElementById("itemText").value,
            })
        });
        if (response.ok) {
            const data = await response.json();
            items.push(data);
            render(template(items), select);
            document.getElementById("itemText").value = "";
        } else {
            throw new Error("Failed to add item");
        }
    } catch (error) {
        console.error(error);
    }
}
