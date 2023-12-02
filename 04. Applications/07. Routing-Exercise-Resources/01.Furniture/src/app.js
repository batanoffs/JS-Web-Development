import page from "../node_modules/page/page.mjs";

// import { serverActions } from "./requester.js";
import { catalogView } from "./views/catalogView.js";
import { createView } from "./views/createView.js";
import { detailsView } from "./views/detailsView.js";
import { editView } from "./views/editView.js";
import { loginView } from "./views/loginView.js";
import { logoutView } from "./views/logoutView.js";
import { myFurnitureView } from "./views/myFurnitureView.js";
import { registerView } from "./views/registerView.js";
import { userHelper } from "./userDataHelper.js";

page("/", catalogView);
page("/catalog", catalogView);
page("/login", loginView);
page("/register", registerView);
page("/logout", logoutView);
page("/create", createView);
page("/myFurniture", myFurnitureView);
page("/details/:id", detailsView);
page("/edit/:id", editView);

updateNav();
page.start();

export function updateNav() {
    const userInfo = userHelper.getUserData();
    if (userInfo) {
        document.getElementById("user").style.display = "inline-block";
        document.getElementById("guest").style.display = "none";
    } else {
        document.getElementById("user").style.display = "none";
        document.getElementById("guest").style.display = "inline-block";
    }
}