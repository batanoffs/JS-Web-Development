import { updateNav } from "../app.js";
import { server , path } from "../requester.js"
import { userHelper } from "../userDataHelper.js";
import page from "../../node_modules/page/page.mjs";

export async function logoutView() {
    await server.get(path.logout);
    userHelper.clearUserData();
    updateNav();

    page.redirect('/');
}