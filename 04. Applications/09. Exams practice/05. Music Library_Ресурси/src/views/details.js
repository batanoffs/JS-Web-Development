import { html } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../dataService.js';
import { userHelper } from '../userHelper.js';

const temp = (data, isOwner) => html `
<!-- Details page -->
<section id="details">
  <div id="details-wrapper">
    <p id="details-title">Album Details</p>
    <div id="img-wrapper">
      <img src="${data.imageUrl}" alt="example1" />
    </div>
    <div id="info-wrapper">
      <p><strong>Band:</strong><span id="details-singer">${data.singer}</span></p>
      <p>
        <strong>Album name:</strong><span id="details-album">${data.album}</span>
      </p>
      <p><strong>Release date:</strong><span id="details-release">${data.release}</span></p>
      <p><strong>Label:</strong><span id="details-label">${data.label}</span></p>
      <p><strong>Sales:</strong><span id="details-sales">${data.sales}</span></p>
    </div>
    <div id="likes">Likes: <span id="likes-count">0</span></div>

       ${!!isOwner ? html` 
    <!--Edit and Delete are only for creator-->
    <div id="action-buttons">
      <a href="javascript:void(0)" @click=${onLike} id="like-btn">Like</a>
      <a href="/edit/${data._id}" id="edit-btn">Edit</a>
      <a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a>
    </div>` : null} 
    
  </div>
</section>`

let context;
export async function detailsPage(ctx) {
    context = ctx;
    const id = context.params.id;

    const data = await dataService.getById(id);
    const owner = data._ownerId;
    const isOwner = owner == userHelper.getUserId();
    console.log(data);
    ctx.render(temp(data, isOwner));
}

async function onLike() {
    const id = context.params.id;
    const data = await dataService.getById(id);
}

async function onDelete() {
    const id = context.params.id;
    if (!confirm('Are you sure you want to delete this item?')) {
        return;
    }

    await dataService.del(id);

    context.page.redirect('/dashboard');
}