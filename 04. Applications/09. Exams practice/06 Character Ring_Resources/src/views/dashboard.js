import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";


const temp = (data) => html`
  <!-- Dashboard page -->
  <h2>Characters</h2>
        <section id="characters">
          ${data && data.length > 0
            ? data.map((hero) => html `
            
                <div class="character">
                  <img src="${hero.imageUrl}" alt="example1" />
                  <div class="hero-info">
                    <h3 class="category">${hero.category}</h3>
                    <p class="description">${hero.description}</p>
                    <a class="details-btn" href="/details/${hero._id}">More Info</a>
                  </div>
                </div>`)
            : html`<h2>No added Heroes yet.</h2>`}
          
          
        </section>
         <!-- ${!!data ? null : html`<h2>No added Heroes yet.</h2>`} -->
`;

let context;
export async function dashboardPage(ctx) {
    context = ctx;
    const heroes = await dataService.getAll();
    ctx.render(temp(heroes));
}
