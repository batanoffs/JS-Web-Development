import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../dataService.js';

const temp = (data) => html `
      <!-- Edit Page (Only for logged-in users) -->
      <section id="edit">
        <div class="form">
          <img class="border" src="./images/border.png" alt="">
          <h2>Edit Character</h2>
          <form @submit=${onSubmit} class="edit-form">
            <input type="text" value=${data.category} name="category" id="category" placeholder="Character Type" />
            <input type="text" value=${data.imageUrl} name="image-url" id="image-url" placeholder="Image URL" />
            <textarea id="description" name="description" placeholder="Description" rows="2" cols="10">${data.description}</textarea>
            <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="2"
              cols="10">${data.moreInfo}</textarea>
            <button type="submit">Edit</button>
          </form>
          <img class="border" src="./images/border.png" alt="">
        </div>
      </section>
      `

let context;
export async function editPage(ctx) {
    context = ctx;
    const id = ctx.params.id
    const hero = await dataService.getItem(id);

    ctx.render(temp(hero))
}

async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { category, 'image-url': imageUrl, description, 'additional-info': moreInfo } = Object.fromEntries(formData);
    if(!category || !imageUrl || !description || !moreInfo) {
        return window.alert('All fields are required!');
    }
    await dataService.updateItem(context.params.id, {category, imageUrl, description, moreInfo});
    context.goTo('/details/' + context.params.id);
}