import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { updateNav } from '../app.js';
import { server, path } from "../requester.js";
import { userHelper } from '../userDataHelper.js';
import page from "../../node_modules/page/page.mjs";


const loginTemp = () => html `
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Login User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${submitHeandler}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class="form-control" id="password" type="password" name="password">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Login" />
                </div>
            </div>
        </form>`

export function loginView() {
    render(loginTemp(), document.querySelector(".container"));
}

async function submitHeandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);
    const data = await server.post(path.login, { email, password });
    userHelper.setUserData(data);
    updateNav();
    page.redirect('/');
}