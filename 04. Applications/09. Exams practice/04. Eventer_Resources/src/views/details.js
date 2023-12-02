import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";
import { userHelper } from "../userHelper.js";

const temp = (data) => html`
<!-- Details page -->
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="${data.imageUrl}" alt="example1" />
        <p id="details-title">${data.name}</p>
        <p id="details-category">
          Category: <span id="categories">${data.category}</span>
        </p>
        <p id="details-date">
          Date:<span id="date">${data.date}</span></p>
        <div id="info-wrapper">
          <div id="details-description">
            <span>${data.description}</span>
          </div>

        </div>

        <h3>Going: <span id="go">0</span> times.</h3>

        ${data._ownerId === userHelper.getUserId() ? html`
        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
          <a href="/edit/${data._id}" id="edit-btn">Edit</a>
          <a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a>

          <!--Bonus - Only for logged-in users ( not authors )-->
          <a href="javascript:void(0)" @click=${onGoing} id="go-btn">Going</a>
        </div>` 
        : null}
    </div>
</section>
`
let context;
export async function detailsPage(ctx) {
  context = ctx;
  const id = ctx.params.id;
  const item = await dataService.getItem(id);
  context.render(temp(item))
}

async function onDelete() {
  if (confirm("Are you sure you want to delete this item?")) {
    await dataService.del(context.params.id);
    context.page.redirect("/dashboard");
  }
}

async function onGoing() {
  console.log("going");
}