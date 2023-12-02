import { dataService } from "../dataService.js";
import { html } from "../../node_modules/lit-html/lit-html.js";

const dashboardTemp = (fruits) => html` <h2>Fruits</h2> 
    ${fruits && fruits.length > 0
        ? html`<section id="dashboard">
              ${fruits.map(
                  (fruit) => html` <div class="fruit">
                      <img src="${fruit.imageUrl}" alt="example1" />
                      <h3 class="title">${fruit.name}</h3>
                      <p class="description">${fruit.description}</p>
                      <a class="details-btn" href="/details/${fruit._id}">More Info</a>
                  </div>`
              )}
          </section>`
        : html`<h2>No fruit info yet.</h2>`}`;

export async function dashboardView(ctx) {
    ctx.render(dashboardTemp(await getFruits()));
}

async function getFruits() {
    const allFruits = await dataService.dashboard();
    return allFruits;
}
