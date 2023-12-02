import { api } from './api.js';

// ADD endpoints HERE
const endpoints = {
    item: (id) => `/data/albums/${id}`,
    all: '/data/albums?sortBy=_createdOn%20desc',
    post: '/data/albums',
}


async function getAll() {
    const result = await api.get(endpoints.all);
    return result;
}

async function del(id) {
    const result = await api.del(endpoints.item(id));
    return result;
}

async function post(data) {
    const result = await api.post(endpoints.post, data);
    return result;
}

async function getById(id) {
    const result = await api.get(endpoints.item(id));
    return result;
}

async function put(id, data) {
    const result = await api.put(endpoints.item(id), data);
    return result;
}

export const dataService = {
    del,
    getAll,
    post,
    getById,
    put
}