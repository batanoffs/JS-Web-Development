
import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";
import { userHelper } from "./userHelper.js";
import { userService } from "./userService.js";
import { registerView } from "./views/register.js";
import { loginView } from "./views/login.js";
import { dashboardView } from "./views/dashboard.js";
import { addProduct } from "./views/addProduct.js";
import { homeView } from "./views/home.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";

const root = document.querySelector("main"); //ADD ROOT ELEMENT
const userNav = document.querySelector(".user"); //ADD USER NAV
const guestNav = document.querySelector(".guest"); //ADD GUEST NAV

page(decorationContext);
page("/", homeView);
page("/dashboard", dashboardView);
page("/login", loginView);
page("/logout", logout);
page("/addProduct", addProduct);
page("/register", registerView);
page("/details/:id", detailsView);
page("/edit/:id", editView);

page.start();
updateNav();

async function logout() {
    await userService.logout();
    updateNav();
    goTo("/");
}

function renderer(template) {
    render(template, root);
}
export function updateNav() {
    const userInfo = userHelper.getUserData();
    if (userInfo) {
        userNav.style.display = "block";
        guestNav.style.display = "none";
    } else {
        userNav.style.display = "none";
        guestNav.style.display = "block";
    }
}

function goTo(path) {
    page.redirect(path);
}

function decorationContext(ctx, next) {
    ctx.render = renderer;
    ctx.updateNav = updateNav;
    ctx.goTo = goTo;

    next();
}
