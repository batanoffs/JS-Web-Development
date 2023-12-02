import {cats} from './catSeeder.js';
import {html, render} from "./node_modules/lit-html/lit-html.js";

const root = document.getElementById('allCats');
const statusCode = "Status Code: ";
const template = (data) => html`
<ul> 
    ${data.map(cat => html`
    <li>
        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn" @click=${showStatus}>Show status code</button>
            <div class="status" style="display: none" id="${cat.id}">
                <h4>${statusCode + cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div>
    </li>`)}
</ul>
`
function showStatus(e) {
    const btn = e.target;
    const status = e.target.parentNode.querySelector('.status');
    const h4 = e.target.parentNode.querySelector('h4');
    const p = e.target.parentNode.querySelector('p');
    const SHOW = "Show status code";
    const HIDE = "Hide status code";

    h4.style.display = h4.style.display === 'block' ? 'none' : 'block';
    p.style.display = p.style.display === 'block' ? 'none' : 'block';
    status.style.display = status.style.display === 'block' ? 'none' : 'block';
    btn.textContent = SHOW === btn.textContent ? HIDE : SHOW;

}
    
render(template(cats), root);