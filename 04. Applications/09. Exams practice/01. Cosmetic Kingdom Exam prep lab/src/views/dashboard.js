import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";


const dashboardTemp = (data)=> html `
        <h2>Products</h2>
            ${ data && data.length > 0 ? html `<section id="dashboard"> 
                ${data.map((product) => html `
                    <div class="product">
                        <img src="${product.imageUrl}" alt="example1" />
                        <p class="title">
                        ${product.name}
                        </p>
                        <p><strong>Price:</strong><span class="price">${product.price}</span>$</p>
                        <a class="details-btn" href="/details/${product._id}">Details</a>
                    </div>
                `)}
            </section>` : html `<h2>No products yet.</h2>`}
            `

let context

export async function dashboardView(ctx) {
    context = ctx;
    const products = await dataService.getAll();
    ctx.render(dashboardTemp(products))
}



