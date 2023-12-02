import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";

const temp = (data) => html`
    <h2>Fun Facts</h2>
    ${ data && data.length > 0
        ? html` <section id="dashboard">
              ${data.map((fact) => html` <div class="fact">
                      <img src="${fact.imageUrl}" alt="example1" />
                      <h3 class="category">${fact.category}</h3>
                      <p class="description">${fact.description}</p>
                      <a class="details-btn" href="/details/${fact._id}">More Info</a>
                  </div>`
              )}
          </section>`
        : html`<h2>No Fun Facts yet.</h2>`}
`;

let context;
export async function factsPage(ctx) {
    context = ctx;
    const allFacts = await dataService.getAll();
    ctx.render(temp(allFacts));
}
