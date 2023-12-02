import { html } from '../../node_modules/lit-html/lit-html.js';
import { userHelper } from '../userHelper.js';
import { dataService } from '../dataService.js';

const detailsTemp = (data) => html `
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="${data.imageUrl}" alt="example1" />
        <p id="details-title">${data.name}</p>
        <div id="info-wrapper">
            <div id="details-description">
                <p>${data.description}</p>
                <p id="nutrition">Nutrition</p>
                <p id="details-nutrition">${data.nutrition}</p>
            </div>
            <!--Edit and Delete are only for creator-->
            ${data._ownerId === userHelper.getUserId() ? html`
            <div id="action-buttons">
                <a href="/edit/${data._id}" id="edit-btn">Edit</a>
                <a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a> <!-- href void  -->
            </div>` : null}
        </div>
    </div>
</section>
`
let context;
export async function detailsView(ctx) {
    context = ctx;
    const id = context.params.id;
    ctx.render(detailsTemp(await getParams(id)))
}

export async function getParams(id) {
    const parametri = await dataService.details(id);
    return parametri;
}

async function onDelete() {
    const choice = confirm('Are you sure you want to delete this fruit?');
    if (choice) {

        await dataService.del(context.params.id);
        context.goTo('/dashboard');
    }
}