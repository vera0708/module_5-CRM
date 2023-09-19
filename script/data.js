import { createRow } from "./createElements.js";
import { API_URL } from "./const.js";

// https://persistent-mangrove-fountain.glitch.me/

export const getData = async () => {
    const response = await fetch(`${API_URL}api/goods`);
    const goods = await response.json();
    return goods;
};

export const getGood = async (id) => {
    const response = await fetch(`${API_URL}api/goods/${id}`);
    const good = await response.json();
    return good;
}

export const postGood = async (data) => {
    const response = await fetch(`${API_URL}api/goods`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        return response.json()
    }
    throw new Error(response.status);
};

export const addGoodPage = (good, table) => {
    table.append(createRow(good));
};

export const editGood = async (editingId, editingGood) => {
    const response = await fetch(`${API_URL}api/goods/${editingId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingGood),
    });

    if (response.ok) {
        return response.json();
    }
    throw new Error(response.status);
};

export const removeGood = async (id) => {
    const response = await fetch(`${API_URL}api/goods/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (response.ok) {
        return response.json()
    }
    throw new Error(response.status);
};

export const getCategory = async () => {
    const response = await fetch(`${API_URL}api/category`);
    if (response.ok) {
        return response.json();
    }
    throw new Error(response.status);
};
