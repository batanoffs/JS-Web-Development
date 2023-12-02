import {html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";

const temp = (item) => html`
<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
        <div class="form">
          <h2>Edit Event</h2>
          <form @submit=${onSubmit} class="edit-form">
            <input type="text" value=${item.name} name="name" id="name" placeholder="Event" />
            <input type="text" value =${item.imageUrl} name="imageUrl" id="event-image" placeholder="Event Image" />
            <input type="text" value=${item.category} name="category" id="event-category" placeholder="Category" />
            <textarea id="event-description" name="description" placeholder="Description" rows="5" cols="50">${item.description}</textarea>
            <label for="date-and-time">Event Time:</label>
            <input type="text" name="date" id="date" value=${item.date} placeholder="When?" />
            <button type="submit">Edit</button>
          </form>
        </div>
      </section>`
let context;
export async function editPage(ctx) {
    context = ctx;
    const id = ctx.params.id;
    const item = await dataService.getItem(id);
    console.log(item);
    ctx.render(temp(item))
}

async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        imageUrl: formData.get('imageUrl'),
        category: formData.get('category'),
        description: formData.get('description'),
        date: formData.get('date')
    }
    if (data.name == '' || data.imageUrl == '' || data.category == '' || data.description == '' || data.date == '') {
        return alert('All fields are required!')
    }
    await dataService.update(context.params.id, data);
    context.page.redirect('/details/' + context.params.id);
  }