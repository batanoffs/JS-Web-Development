import { api } from './api.js';

// ADD endpoints HERE
const endpoints = {
    getAll: '/data/events?sortBy=_createdOn%20desc',
    item: (id) => `/data/events/${id}`,
    post: "/data/events"
}




async function del(id) {
    const result = await api.del(endpoints.item(id));
    return result;
}

async function getAll() {
    const result = await api.get(endpoints.getAll);
    return result;
}

async function getItem(id) {
    const result = await api.get(endpoints.item(id));
    return result;
}
async function update(id, body) {
    const result = await api.put(endpoints.item(id), body);
    return result;
}

async function post(body) {
    const result = await api.post(endpoints.post, body);
    return result;
}
export const dataService = {
    del,
    getAll,
    getItem,
    update,
    post
}