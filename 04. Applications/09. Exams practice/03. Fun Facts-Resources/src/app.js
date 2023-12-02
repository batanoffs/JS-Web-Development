
import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";
import { userHelper } from "./userHelper.js";
import { userService } from "./userService.js";
import { addPage } from "./views/add.js";
import { homePage } from "./views/home.js";
import { registerPage } from "./views/register.js";
import { loginPage } from "./views/login.js";
import { factsPage } from "./views/dashboard.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";

const root = document.querySelector("main"); //ADD ROOT ELEMENT
const userNav = document.querySelector(".user"); //ADD USER NAV
const guestNav = document.querySelector(".guest"); //ADD GUEST NAV

page(decorationContext);
page("/", homePage);
page("/login", loginPage);
page("/logout", logout);
page("/dashboard", factsPage);
page("/add", addPage);
page("/register", registerPage);
page("/details/:id", detailsPage);
page("/edit/:id", editPage);

page.start();
updateNav();

async function logout() {
    const result = await userService.logout();
    if (!result) {
        window.alert("Logout successful");
        updateNav();
        goTo("/");
    }
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
