import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { server } from "../requester.js";
import { userHelper } from "../userDataHelper.js";

const root = document.querySelector(".container");
const myFurnTemp = (data) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>My Furniture</h1>
            <p>This is a list of your publications.</p>
        </div>
    </div>
    <div class="row space-top">
    ${data.map(
        (item) => html`
            
                <div class="col-md-4">
                    <div class="card text-white bg-primary">
                        <div class="card-body">
                            <img src="${item.img}"/>
                            <p>${item.description}</p>
                            <footer>
                                <p>Price: <span>${item.price} $</span></p>
                            </footer>
                            <div>
                                <a href="/details/${item._id}" class="btn btn-info">Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    )}
`;
export async function myFurnitureView() {
    const userId = userHelper.getUserId();
    const data = await server.get(`/data/catalog?where=_ownerId%3D%22${userId}%22`);
    render(myFurnTemp(data), root);
    page.redirect();
}
