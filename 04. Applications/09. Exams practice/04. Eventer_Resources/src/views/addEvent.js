import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../dataService.js';

const temp = () => html`

<!-- Create Page (Only for logged-in users) -->
        <section id="create">
            <div class="form">
            <h2>Add Event</h2>
            <form @submit=${onSubmit} class="create-form">
                <input type="text" name="name" id="name" placeholder="Event" />
                <input type="text" name="imageUrl" id="event-image" placeholder="Event Image URL" />
                <input type="text" name="category" id="event-category" placeholder="Category" />
                <textarea id="event-description" name="description" placeholder="Description" rows="5" cols="50"></textarea>
                <input type="text" name="date" id="date" placeholder="When?" />
                <button type="submit">Add</button>
            </form>
            </div>
        </section>`

let context;
export async function addEventPage(ctx) {
    context = ctx;
    ctx.render(temp())
}

async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { name, imageUrl, category, description, date } = Object.fromEntries(formData);
    if(name == '' || imageUrl == '' || category == '' || description == '' || date == '') {
        return alert('All fields are required!')
    }
    try {
        await dataService.post({name, imageUrl,category, description, date});
        event.target.reset();
        context.goTo('/dashboard');
    } catch (error) {
        alert(error.message)
    }    
}