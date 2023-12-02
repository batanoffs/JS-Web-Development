import { dataService } from '../dataService.js';
import { html } from '../../node_modules/lit-html/lit-html.js';


let context;

const searchTemp = (data) => html`
    <section id="search">

        <div class="form">
            <h2>Search</h2>
            <form @submit=${onSubmit} class="search-form">
                <input type="text" name="search" id="search-input" />
                <button class="button-list">Search</button>
            </form>
        </div>
        <h4>Results:</h4>
        <div class="search-result">
            ${ 
                (data !== undefined) ?
                    html `${ (data.length > 0) ? data.map((fruit) => resultTemp(fruit))
                    : html`<p class="no-result">No result.</p>`}`
                : null
            }
        </div>
    </section>`

const resultTemp = (data) => html `
            <div class="fruit">
                <img src="${data.imageUrl}" alt="example1" />
                <h3 class="title">${data.name}</h3>
                <p class="description">${data.description}</p>
                <a class="details-btn" href="/details/${data._id}">More Info</a>
            </div>
`


export async function searchView(ctx) {
    context = ctx;
    context.render(searchTemp());
}

async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { search } = Object.fromEntries(formData);
    if (!search) {
        alert('All fields are required!');
        return;
    }
    const fruits = await dataService.search(search);
    
    context.render(searchTemp(fruits));
}
