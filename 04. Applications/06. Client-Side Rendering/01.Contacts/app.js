import { contacts } from "./contacts.js";
import { html, render } from "./node_modules/lit-html/lit-html.js";

const root = document.querySelector("#contacts");

const newContact = (data) => html`
    <div class="contact card">
        <div>
            <i class="far fa-user-circle gravatar"></i>
        </div>
        <div class="info">
            <h2>Name: ${data.name}</h2>
            <button class="detailsBtn" @click=${show}>
                Details
            </button>
            <div class="details" id=${data.id}>
                <p>Phone number: ${data.phoneNumber}</p>
                <p>Email: ${data.email}</p>
            </div>
        </div>
    </div>`;
function show(e){
    e.preventDefault();
    const div = e.target.parentElement.querySelector('.details');
    div.style.display = div.style.display === 'block' ? 'none' : 'block';
}
const all = contacts.map((c) => html`${newContact(c)}`);
render(all, root);