import { get, post, put, del } from "./api.js";


const endpoints = {
    catalog: '/data/fruits?sortBy=_createdOn%20desc',
    byId: '/data/fruits/'
};

export async function getAllFruits() {
    return get(endpoints.catalog);
}

export async function getById(id) {
    return get(endpoints.byId + id);
}

export async function createFruits(data) {
    return post(endpoints.catalog, data);
}

export async function updateFruits(id, data) {
    return put(endpoints.byId + id, data);
}

export async function deleteFruits(id) {
    return del(endpoints.byId + id);
}