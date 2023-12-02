import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";
import { getParams } from "./details.js";

const editTemp = (data) => html `
  <section id="edit">
      <div class="form">
          <h2>Edit Fruit</h2>
          <form @submit=${onSubmit} class="edit-form">
              <input type="text" value="${data.name}" name="name" id="name" placeholder="Fruit Name" />
              <input type="text" value="${data.imageUrl}" name="imageUrl" id="Fruit-image" placeholder="Fruit Image URL" />
              <textarea id="fruit-description" name="description" placeholder="Description" rows="10" cols="50">${data.description}</textarea>
              <textarea id="fruit-nutrition" name="nutrition" placeholder="Nutrition" rows="10" cols="50">${data.nutrition}</textarea>
              <button type="submit">post</button>
          </form>
      </div>
  </section>
`;


let context;


export async function editView(ctx){
    context = ctx;
    const paramsData = await getParams(context.params.id);
    context.render(editTemp(paramsData));
}


async function onSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const {name, imageUrl, description, nutrition} = Object.fromEntries(formData);
    if(!name || !imageUrl || !description || !nutrition){
        alert('All fields are required!');
        return;
    }
    await dataService.editFruit(context.params.id, {name, imageUrl, description, nutrition});
    context.page.redirect('/dashboard');
}