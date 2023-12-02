import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";


const temp = (data) => html`
<!-- Dashboard page -->
<section id="dashboard">
    <h2>Albums</h2>
    <ul class="card-wrapper">
        ${data && data.length > 0 ? data.map((album) => html `
            <!-- Display a li with information about every post (if any)-->
            <li class="card">
            <img src=".${album.imageUrl}" alt="travis" />
            <p>
                <strong>Singer/Band: </strong><span class="singer">${album.singer}</span>
            </p>
            <p>
                <strong>Album name: </strong><span class="album">${album.album}</span>
            </p>
            <p><strong>Sales:</strong><span class="sales">${album.sales}</span></p>
            <a class="details-btn" href="/details/${album._id}">Details</a>
            </li>`)
            :
            html `
            <!-- Display an h2 if there are no posts -->
            <h2>There are no albums added yet.</h2>`}        
    </ul>      
</section>
`;

let context;
export async function dashboardPage(ctx) {
    context = ctx;
    const getData = await dataService.getAll();
    ctx.render(temp(getData));
}
