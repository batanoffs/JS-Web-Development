import { html } from '../../node_modules/lit-html/lit-html.js';
import { userService } from '../userService.js';

const registerTemp = (err) => {
    return html`
    <section id="register">
        <article class="narrow">
            <header class="pad-med">
                <h1>Register</h1>
            </header>
            <form @submit=${onSubmit} id="register-form" class="main-form pad-large">
                ${err ? html`<div class="error">${err}</div>` : 
                ""}
                <div class="error">Error message.</div>
                <label>E-mail: <input type="text" name="email"></label>
                <label>Username: <input type="text" name="username"></label>
                <label>Password: <input type="password" name="password"></label>
                <label>Repeat: <input type="password" name="repass"></label>
                <input class="action cta" type="submit" value="Create Account">
            </form>
            <footer class="pad-small">Already have an account? <a href="#" class="invert">Sign in here</a>
            </footer>
        </article>
    </section>
    `
}
let context = null;
export function showRegisterView(ctx) {
    context = ctx;
    context.render(registerTemp())
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, username, password, repass } = Object.fromEntries(formData.entries());

    if (!email || !username || !password || password.length < 3 || password !== repass) {
        return context.render(registerTemp("Input field is required!"));
    }

    await userService.register(email, username, password);
    // todo update nav
    // todo redirect
}