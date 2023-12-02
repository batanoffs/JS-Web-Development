import { html } from "../../node_modules/lit-html/lit-html.js";
import { updateNav } from "../app.js";
import { userService } from "../userService.js";

const loginTemp = () => html `
  <section id="login">
    <div class="form">
      <h2>Login</h2>
      <form @submit=${onSubmit} class="login-form">
        <input type="text" name="email" id="email" placeholder="email" />
        <input type="password" name="password" id="password" placeholder="password" />
        <button type="submit">login</button>
        <p class="message">
          Not registered? <a href="/register">Create an account</a>
        </p>
      </form>
    </div>
  </section>`

let context;
export function loginView(ctx) {
  context = ctx;
  context.render(loginTemp());
}

async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { email, password } = Object.fromEntries(formData);
    if (!email || !password) {
      return alert("All fields are required");
    }
    await userService.login(email, password);
    updateNav();
    context.page.redirect("/");
}