import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";

const editTemp = (data) => html `
    <section id="edit">
        <div class="form">
          <h2>Edit Product</h2>
          <form @submit=${onSubmit} class="edit-form">
            <input type="text" value="${data.name}" name="name" id="name" placeholder="Product Name" />
            <input type="text" value="${data.imageUrl}" name="imageUrl" id="product-image" placeholder="Product Image" />
            <input type="text" value="${data.category}" name="category" id="product-category" placeholder="Category" />
            <textarea id="product-description" name="description" placeholder="Description" rows="5"
              cols="50">${data.description}</textarea>

            <input type="text" value="${data.price}" name="price" id="product-price" placeholder="Price" />
            <button type="submit">post</button>
          </form>
        </div>
      </section>`
let context;
export async function editView(ctx) {
    const id = ctx.params.id;
    context = ctx;
    const product = await dataService.getProduct(id);
    context.render(editTemp(product));
}

async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { name, imageUrl, category, description, price } = Object.fromEntries(formData);
    if (name == '' || imageUrl == '' || category == '' || description == '' || price == '') {
        return alert('All fields are required')
    }
    await dataService.update(context.params.id, {name,imageUrl,category,description,price})
    context.page.redirect(`/dashboard`);
}