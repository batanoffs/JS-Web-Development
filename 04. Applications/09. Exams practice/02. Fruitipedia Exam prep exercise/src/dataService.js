import { api } from "./api.js";

// ADD endpoints HERE
const endpoints = {    
    dashboard: "/data/fruits?sortBy=_createdOn%20desc",
    addFruit: "/data/fruits",
    fruitId: (id) => `/data/fruits/${id}`,
    search: (query) => `/data/fruits?where=name%20LIKE%20%22${query}%22`,
};

async function dashboard() {
    const data = await api.get(endpoints.dashboard);
    return data;
}

async function addFruit(data) {
    const result = await api.post(endpoints.addFruit, data);
    return result;
}

async function details(id) {
    const result = await api.get(endpoints.fruitId(id));
    return result;
}

async function editFruit(id, data) {
    const result = await api.put(endpoints.fruitId(id), data);
    return result;
}

async function del(id) {
    const result = await api.del(endpoints.fruitId(id));
    return result;
}
async function search(query) {
    const result = await api.get(endpoints.search(query));
    return result;
}

export const dataService = {
    dashboard,
    addFruit,
    details,
    editFruit,
    del,
    search
};
