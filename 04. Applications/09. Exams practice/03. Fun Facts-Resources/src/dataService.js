import { api } from './api.js';

// ADD endpoints HERE
const endpoints = {
    item: (id) => `/data/facts/${id}`,
    getAll: "/data/facts?sortBy=_createdOn%20desc",
    add: "/data/facts",
    like: "/data/likes",
    likeCount : (id) => `/data/likes?where=factId%3D%22${id}%22&distinct=_ownerId&count`,
}

async function add(body) {
    const result = await api.post(endpoints.add, body);
    return result;
}

async function addLike(body) {
    const response = await api.post(endpoints.like, body);
    return response;
}

async function del(id) {
    const result = await api.del(endpoints.item(id));
    return result;
}
async function getAll() {
    const result = await api.get(endpoints.getAll);
    return result;
}
async function getAllLikes(id) {
    const result = await api.get(endpoints.likeCount(id));
    return result;
}

async function getOne(id) {
    const result = await api.get(endpoints.item(id));
    return result;
}

async function editItem(id, body) {
    const result = await api.put(endpoints.item(id), body);
    return result;
}
export const dataService = {
    del,
    getAll,
    getOne,
    editItem,
    add,
    addLike,
    getAllLikes
}