import { api } from './api.js';

// ADD endpoints HERE
const endpoints = {
    
    add: "/data/products",
    all: "/data/products?sortBy=_createdOn%20desc",
    product: (id) => `/data/products/${id}`,
}


async function getAll() {
    const result = await api.get(endpoints.all);
    return result;
}

async function del(id) {
    const result = await api.del(endpoints.product(id));
    return result;
}

async function add(body) {
    const result = await api.post(endpoints.add, body);
    return result;
}

async function getProduct(id) {
    const result = await api.get(endpoints.product(id));
    return result;
}

async function update(id, body) {
    const result = await api.put(endpoints.product(id), body);
    return result;
}

export const dataService = {
    del,
    add,
    getAll,
    getProduct,
    update
}