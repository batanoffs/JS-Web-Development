import { html, render } from "./node_modules/lit-html/lit-html.js";

const URL = "http://localhost:3030/jsonstore/advanced/table";
const tbody = document.querySelector("tbody");
const searchField = document.querySelector("#searchField");

document.querySelector("#searchBtn").addEventListener("click", onClick);

const response = await fetch(URL);
const dataResponse = await response.json();
const students = Object.values(dataResponse);
const template = (data, match) =>
    html` ${data.map(
        (s) => html`
            <tr class=${match && match.includes(s) ? "select" : ""}>
                <td>${s.firstName} ${s.lastName}</td>
                <td>${s.email}</td>
                <td>${s.course}</td>
            </tr>
        `
    )}`;

render(template(students, undefined), tbody);

function onClick() {
    const searchText = searchField.value;
    if (!searchText && searchText === "") return;

    const matches = students.filter((student) => {
        return (
            student.firstName
                .toLowerCase()
                .includes(searchText.toLowerCase()) ||
            student.lastName.toLowerCase().includes(searchText.toLowerCase()) ||
            student.email.toLowerCase().includes(searchText.toLowerCase()) ||
            student.course.toLowerCase().includes(searchText.toLowerCase())
        );
    });

    searchField.value = "";

    render(template(students, matches), tbody);
}
