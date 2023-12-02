import {html, render} from './node_modules/lit-html/lit-html.js';

const root = document.getElementById('root');
const form = document.querySelector('form');
const input = document.getElementById('towns');

form.addEventListener('submit', onSubmit);

function onSubmit(ev) {
    ev.preventDefault();
    const towns = input.value.split(', ');
    const allList = html`
        <ul>
        ${towns.map(town => html`<li>${town}</li>`)}
        </ul>`
    render(allList, root);
    input.value = '';
}
