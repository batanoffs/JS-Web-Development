import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";
import { userHelper } from "../userHelper.js";

const temp = (data, isOwner, isLogged, likes) => html`
    <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src="${data.imageUrl}" alt="example1" />
            <p id="details-category">${data.category}</p>
            <div id="info-wrapper">
                <div id="details-description">
                    <p id="description">${data.description}</p>
                    <p id="more-info">${data.moreInfo}</p>
                </div>
                <h3>Likes:<span id="likes">${likes ? likes : '0'}</span></h3>               
                <div id="action-buttons">
                    ${isOwner ? html `
                        <a href="/edit/${data._id}" id="edit-btn">Edit</a>
                        <a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a>`
                    : null}
                        
                    ${!!isLogged ? html`
                        <a href="javascript:void(0)" @click=${onLike} id="like-btn">Like</a>`
                         : null}
                </div>              
            </div>
        </div>
    </section>
`;

let context;
let fact;
let isOwner;
let userId;
export async function detailsPage(ctx) {
    context = ctx;
    userId = userHelper.getUserId();
    console.log(!!userId);
    const factId = context.params.id;
    fact = await dataService.getOne(factId);
    const ownderId = fact._ownerId;
    isOwner = userId == ownderId;
    const likesCount = await dataService.getAllLikes(factId);
    context.render(temp(fact, isOwner, userId, likesCount));
}

async function onDelete() {
    const id = context.params.id;
    
    if (window.confirm("Do you really want to leave?")) {
        await dataService.del(id);
        context.page.redirect('/dashboard');
      }
          
}

async function onLike() {
    const factId = context.params.id;
    await dataService.addLike({factId});
    const likesCount = await dataService.getAllLikes(factId);
    context.render(temp(fact, isOwner, userId, likesCount));
}