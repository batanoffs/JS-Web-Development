import { dataService } from "../dataService.js";
import { html } from '../../node_modules/lit-html/lit-html.js';
import { userHelper } from "../userHelper.js";

const temp = (data, owner, isUser, count, isLiked) => html`
<!-- Details page -->
<section id="details">
  <div id="details-wrapper">
    <img id="details-img" src="${data.imageUrl}" alt="example1" />
    <div>
      <p id="details-category">${data.category}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p id="description">${data.description}</p>
          <p id="more-info">${data.moreInfo}</p>
        </div>
      </div>
      <h3>Is This Useful:<span id="likes">${!!count ? count : 0}</span></h3>

      <div id="action-buttons">
        ${owner ? html `        
          
            <a href="/edit/${data._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a>          

          ` : null}

          ${!!isUser && !owner && !isLiked? html `          
            <a href="javascript:void(0)" @click=${onLike} id="like-btn">Like</a>` : null}
      </div>
      
    </div>
  </div>
</section>
`
let context;
let hero;
let isOwner;
let loggedIn;
let userId;
export async function detailsPage(ctx) {
    context = ctx;
    const characterId = ctx.params.id
    hero = await dataService.getItem(characterId);
    const ownerId = hero._ownerId;
    userId = userHelper.getUserId();
    isOwner = userId == ownerId;
    loggedIn = userHelper.getUserData();
    const count = await dataService.getAllLikes(characterId);
    console.log(count);
    const isLiked = await dataService.getUserLikes(characterId, userId);
    const alreadyLiked = isLiked == 1 ? true : false;
    ctx.render(temp(hero, isOwner, loggedIn, count, alreadyLiked));
}

async function onLike() {
  const characterId = context.params.id;
  await dataService.like({ characterId: characterId });  
  const isLiked = await dataService.getUserLikes(characterId, userId);
  const alreadyLiked = isLiked == 1 ? true : false;
  const count = await dataService.getAllLikes(characterId);
  console.log(count);
  context.render(temp(hero, isOwner, loggedIn, count, alreadyLiked));
}

async function onDelete() {
    const id = context.params.id;
    const confirmed = confirm('Are you sure you want to delete this item?');
    if (confirmed) {
      await dataService.del(id);
      context.page.redirect('/dashboard');
    } else {
      return;
    }
    
}

