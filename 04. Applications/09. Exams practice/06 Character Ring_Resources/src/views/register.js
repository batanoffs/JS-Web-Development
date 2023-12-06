import { html } from '../../node_modules/lit-html/lit-html.js';
import { updateNav } from '../app.js';
import { userService } from '../userService.js';

const temp = () => html `
      <!-- Register Page (Only for Guest users) -->
      <section id="register">

        <div class="form">
          <img class="border" src="./images/border.png" alt="">
          <h2>Register</h2>
          <form @submit=${onSubmit} class="register-form">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
          </form>
          <img class="border" src="./images/border.png" alt="">
        </div>
        
      </section>
`
let context;
export function registerPage(ctx) {
    ctx.render(temp());
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password, 're-password': rePassword } = Object.fromEntries(formData);
    if (!email || !password || !rePassword) {
        return window.alert('All fields are required!');
    }

    if(password !== rePassword) {
        return window.alert('Passwords don\'t match!');
    }
    
    await userService.register(email, password);
    updateNav();
    context.goTo('/');
}