import { html } from '../../node_modules/lit-html/lit-html.js'
import { updateNav } from '../app.js';
import { userService } from '../userService.js';

const registerTemp = () => html `
        <section id="register">
            <div class="form">
                    <h2>Register</h2>
                    <form @submit=${onSubmit} class="register-form">
                    <input
                        type="text"
                        name="email"
                        id="register-email"
                        placeholder="email"
                    />
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        placeholder="password"
                    />
                    <input
                        type="password"
                        name="re-password"
                        id="repeat-password"
                        placeholder="repeat password"
                    />
                    <button type="submit">register</button>
                    <p class="message">Already registered? <a href="/login">Login</a></p>
                    </form>
            </div>
        </section>`

let context;
export function registerView(ctx) {
    context = ctx;
    ctx.render(registerTemp())
}

async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { email, password, "re-password": rePassword } = Object.fromEntries(formData);
    if(email == '' || password == '' || rePassword == '') {
        return alert('All fields are required')
    }
    if(password != rePassword) {
        return alert('Passwords do not match')
    }
    await userService.register(email, password);
    event.target.reset();
    updateNav();
    context.page.redirect('/')
}