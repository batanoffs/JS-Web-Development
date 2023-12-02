import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";


const temp = (data) => html`

<!-- Dashboard page -->
<h2>Current Events</h2>
        <section id="dashboard">
            <!-- Display a div with information about every post (if any)-->
            ${data && data.length > 0 ? data.map((item) => html `
                <div class="event">
                    <img src="${item.imageUrl}" alt="example1" />
                    <p class="title">${item.name}</p>
                    <p class="date">${item.date}</p>
                    <a class="details-btn" href="/details/${item._id}">Details</a>
                </div> 
            `) : null}
                
        </section>

        ${!!data ? 
            html`<h4>No Events yet.</h4>` 
        : null}
`;

let context;
export async function dashboardPage(ctx) {
    context = ctx;
    const getData = await dataService.getAll();
    ctx.render(temp(getData));
}
