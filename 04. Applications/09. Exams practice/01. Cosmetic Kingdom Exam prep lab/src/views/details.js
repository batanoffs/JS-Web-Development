import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";
import { userHelper } from "../userHelper.js";

const detailsTemp = (data, isOwner) => html `

    <section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="${data.imageUrl}" alt="example1" />
        <p id="details-title">${data.name}</p>
        <p id="details-category">
        Category: <span id="categories">${data.category}</span>
        </p>
        <p id="details-price">
        Price: <span id="price-number">${data.price}</span>$</p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Bought: <span id="buys">${data.buys}</span> times.</h4>
                <span>${data.description}</span>
            </div>
        </div>
        <div id="action-buttons">
        ${isOwner ? html `<!--Edit and Delete are only for creator-->
        
        <a href="/edit/${data._id}" id="edit-btn">Edit</a>
        <a href='javascript:void(0)' @click=${onDelete} id="delete-btn">Delete</a>` : ''}
        

        <!--Bonus - Only for logged-in users ( not authors )-->
        <a href="" id="buy-btn">Buy</a>
        </div>
    </div>
    </section>`

let context;
export async function detailsView(ctx) {
    context=ctx;
    const id = context.params.id;
    const userId = userHelper.getUserId();
    const product = await dataService.getProduct(id);
    const ownerId = product._ownerId;
    const isOwner = ownerId == userId;
    context.render(detailsTemp(product, isOwner))
    
}

async function onDelete() {
    await dataService.del(context.params.id);
    context.page.redirect('/dashboard');
}


