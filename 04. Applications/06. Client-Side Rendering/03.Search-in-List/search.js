import { html, render } from "./node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js";

const div = document.getElementById("towns");
const inputField = document.getElementById("searchText");
const result = document.getElementById("result");
const btn = document.querySelector("button");
const template = (data) => html`
    <ul>
        ${data.map((town) => html`<li>${town}</li>`)}
    </ul>
`;
render(template(towns), div);

btn.addEventListener("click", search);

function search() {
    const text = inputField.value;
    const matches = towns.filter((town) => town.includes(text));

    if (matches.length == 0) {
        render(html`<p>No matches found</p>`, result);
    }
    const template = (data) => html`
        <ul>
            ${data.map((town) => html`<li class="active">${town}</li>`)}
        </ul>
    `;
    render(template(matches), div);
    render(html`<p>${matches.length} matches found</p>`, result);
    inputField.value = "";
}
