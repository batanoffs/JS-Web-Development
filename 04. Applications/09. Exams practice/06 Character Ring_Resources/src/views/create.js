import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../dataService.js';

const temp = html `
      <!-- Create Page (Only for logged-in users) -->
      <section id="create">
        <div class="form">
          <img class="border" src="./images/border.png" alt="">
          <h2>Add Character</h2>
          <form @submit=${onSubmit} class="create-form">
            <input type="text" name="category" id="category" placeholder="Character Type" />
            <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
            <textarea id="description" name="description" placeholder="Description" rows="2" cols="10"></textarea>
            <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="2"
              cols="10"></textarea>
            <button type="submit">Add Character</button>
          </form>
          <img class="border" src="./images/border.png" alt="">
        </div>
      </section>
`
let context;
export async function createPage(ctx) {
    context = ctx;
    context.render(temp);
}

async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { category, 'image-url': imageUrl, description, 'additional-info': moreInfo } = Object.fromEntries(formData);
    if (!category || !imageUrl || !description || !moreInfo) {
        return window.alert('All fields are required!');
    }
    await dataService.createItem({category, imageUrl, description, moreInfo});
    context.goTo('/dashboard');
}