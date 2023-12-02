import page from "../../node_modules/page/page.mjs";
import { html } from "../../node_modules/lit-html/lit-html.js";
import { updateNav } from "../app.js";
import { userService } from "../userService.js";


const loginTemp  = () => html `
        <section id="login">
          <div class="form">
            <h2>Login</h2>
            <form @submit=${onSubmit} class="login-form">
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="/register">Create an account</a>
              </p>
            </form>
          </div>
        </section>
`

export const loginView = (ctx) => {
    ctx.render(loginTemp());
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const {email, password} = Object.fromEntries(formData);
    if (!email || !password) {
        throw new Error('All fields are required!');
    }
    await userService.login(email, password);
    updateNav();
    page.redirect('/');
}