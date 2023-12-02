import { userHelper } from "./userHelper.js";

const host = "http://localhost:3030"; // ADD YOUR HOST HERE

async function requester(method, url, data) {
    const options = {
        method,
        headers: {},
    };
    if (data) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
    }
    const userInfo = userHelper.getUserData();

    if (userInfo) {
        const token = userInfo.accessToken;
        options.headers["X-Authorization"] = token;
    }
    try {
        const response = await fetch(host + url, options);
        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message);
        }
        if (response.status == 204) {
            return response;
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
}

function get(url) {
    return requester("GET", url);
}

function post(url, data) {
    return requester("POST", url, data);
}

function put(url, data) {
    return requester("PUT", url, data);
}

function del(url) {
    return requester("DELETE", url);
}

export const api = {
    get: get,
    post: post,
    put: put,
    del: del,
};
