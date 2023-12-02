import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";

const addTemp = () => html`
    <section id="create">
        <div class="form">
            <h2>Add Fact</h2>
            <form @submit=${onSubmit} class="create-form">
                <input
                    type="text"
                    name="category"
                    id="category"
                    placeholder="Category"
                />
                <input
                    type="text"
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
                ></textarea>
                <textarea
                    id="additional-info"
                    name="additional-info"
                    placeholder="Additional Info"
                    rows="10"
                    cols="50"
                ></textarea>
                <button type="submit">Add Fact</button>
            </form>
        </div>
    </section>
`;
let context;
export async function addPage(ctx) {
    context = ctx;
    ctx.render(addTemp());
}

async function onSubmit(event) {
    event.preventDefault();
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
    await dataService.add({
        category,
        imageUrl,
        description,
        moreInfo,
    });
    context.goTo("/dashboard");
}
