import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";

const temp = (data) => html`
    <section id="edit">
        <div class="form">
            <h2>Edit Fact</h2>
            <form @submit=${onSubmit} class="edit-form">
                <input
                    type="text"
                    value=${data.category}
                    name="category"
                    id="category"
                    placeholder="Category"
                />
                <input
                    type="text"
                    value=${data.imageUrl}
                    name="image-url"
                    id="image-url"
                    placeholder="Image URL"
                />
                <textarea
                    id="description"
                    name="description"
                    placeholder="Description"
                    rows="10"
                    cols="50"
                >
${data.description}</textarea
                >
                <textarea
                    id="additional-info"
                    name="additional-info"
                    placeholder="Additional Info"
                    rows="10"
                    cols="50"
                >
${data.moreInfo}</textarea
                >
                <button type="submit">Post</button>
            </form>
        </div>
    </section>
`;
let context;
export async function editPage(ctx) {
    context = ctx;
    const itemId = context.params.id;
    const fact = await dataService.getOne(itemId);
    console.log(fact);
    ctx.render(temp(fact));
}

async function onSubmit(event) {
    event.preventDefault();
    const id = context.params.id;
    const formData = new FormData(event.target);
    const {
        category,
        "image-url": imageUrl,
        description,
        "additional-info": moreInfo,
    } = Object.fromEntries(formData);

    if (
        category == "" ||
        imageUrl == "" ||
        description == "" ||
        moreInfo == ""
    ) {
        return alert("All fields are required!");
    }

    await dataService.editItem(id, {
        category,
        imageUrl,
        description,
        moreInfo,
    });
    context.goTo(`/details/${id}`);
}
