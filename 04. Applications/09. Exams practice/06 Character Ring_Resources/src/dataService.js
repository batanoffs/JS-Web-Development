import { api } from './api.js';

// ADD endpoints HERE
const endpoints = {
    item: (id) => `/data/characters/${id}`,
    all: '/data/characters?sortBy=_createdOn%20desc',
    post: '/data/characters',
    like: '/data/useful',
    getAllLikes: (id) => `/data/useful?where=characterId%3D%22${id}%22&distinct=_ownerId&count`,
    getUserLikes: (id, user) => `/data/useful?where=characterId%3D%22${id}%22%20and%20_ownerId%3D%22${user}%22&count`
}




async function del(id) {
    const result = await api.del(endpoints.item(id));
    return result;
}
async function getAll() {
    const result = await api.get(endpoints.all);
    return result;
}

async function getItem (id) {
    const result = await api.get(endpoints.item(id));
    return result;
}

async function updateItem(id, body) {
    const result = await api.put(endpoints.item(id), body);
    return result; 
}

async function createItem(data) {
    const result = await api.post(endpoints.post, data);
    return result;
}

async function like(body) {
    const result = await api.post(endpoints.like, body);
    return result;
}

async function getAllLikes(id) {
    const result = await api.get(endpoints.getAllLikes(id));
    return result;
}

async function getUserLikes(id, user) {
    const result = await api.get(endpoints.getUserLikes(id, user));
    return result;
}

export const dataService = {
    del,
    getAll,
    getItem,
    updateItem,
    createItem,
    like,
    getAllLikes,
    getUserLikes
}