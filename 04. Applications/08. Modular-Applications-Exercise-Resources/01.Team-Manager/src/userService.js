import { api } from "./api.js";
import { userHelper } from "./userHelper.js";

const endpoints = {
    login: "users/login",
    register: "users/register",
    logout: "users/logout"
}
async function register(email, username, password) {

    const data = await api.post(endpoints.register, {email, username, password});
    userHelper.setUserData(data);
}

async function login(email, password) {

    const data = await api.post (endpoints.login, {email, password});
    userHelper.setUserData(data);
}

async function logout() {

    await api.get (endpoints.logout);
    userHelper.removeUserData();
}

export const userService = {
    register,
    login,
    logout
}