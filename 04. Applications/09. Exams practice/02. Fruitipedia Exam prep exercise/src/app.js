
import { render } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";
import { userHelper } from "./userHelper.js";
import { userService } from "./userService.js";
import { addView } from "./views/add.js";
import { dashboardView } from "./views/dashboard.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { searchView } from "./views/search.js";

const root = document.querySelector("main"); //ADD ROOT ELEMENT
const userNav = document.querySelector(".user"); //ADD USER NAV
const guestNav = document.querySelector(".guest"); //ADD GUEST NAV

page(decorationContext);
page("/", homeView);
page("/login", loginView);
page("/logout", logout);
page("/dashboard", dashboardView);
page("/search", searchView);
page("/add", addView);
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

function display(template) {
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
    ctx.render = display;
    ctx.updateNav = updateNav;
    ctx.goTo = goTo;

    next();
}
