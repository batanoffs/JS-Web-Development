
import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";
import { userHelper } from "./userHelper.js";
import { userService } from "./userService.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { dashboardPage } from "./views/dashboard.js";
import { registerPage } from "./views/register.js";
import { addEventPage } from "./views/addEvent.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";

const root = document.querySelector("main"); //ADD ROOT ELEMENT
const userNav = document.querySelector(".user"); //ADD USER NAV
const guestNav = document.querySelector(".guest"); //ADD GUEST NAV

page(decorationContext);
page("/", homePage);
page("/login", loginPage);
page("/logout", logout);
page("/register", registerPage);
page("/dashboard", dashboardPage);
page("/add", addEventPage);
page("/details/:id", detailsPage);
page("/edit/:id", editPage);

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
