import { html } from '../../node_modules/lit-html/lit-html.js';
import { updateNav } from '../app.js';
import { userService } from '../userService.js';

const temp = () => html `
<!-- Login Page (Only for Guest users) -->
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
</section>
`
let context;
export function loginPage(ctx) {
    context = ctx;
    ctx.render(temp());
    console.log("loginPage");
}

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);
    if (!email || !password) {
      return window.alert('All fields are required!');        
    }
    
    await userService.login(email, password);
    updateNav();
    context.goTo('/');
}