import { api } from './api.js';
import { userHelper } from './userHelper.js';

// ADD endpoints HERE
const endpoints = {
    login: "/users/login",
    register: "/users/register",
    logout: "/users/logout",
}

async function register ( email, password ) {
    try {
        const data = await api.post(endpoints.register, { email, password });
        userHelper.setUserData(data);
    } catch (error) {
        return alert(error.message);
    }
}

async function login(email, password) {
    try {
        const response = await api.post(endpoints.login, { email, password });
        userHelper.setUserData(response);
        return response;
    } catch (error) {
        alert(error.message);
    }
    
}

async function logout () {
    await api.get(endpoints.logout);
    userHelper.removeUserData();
}



export const userService = {
    register,
    login,
    logout,
}