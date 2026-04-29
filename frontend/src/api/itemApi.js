import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

// GET all items (includes discountPercentage)
export const getItems = () => API.get("/items");

// GET single item by ID
export const getItemById = (id) => API.get(`/items/${id}`);

// POST new item (with discountPercentage field included in itemData)
export const createItem = (itemData) => API.post("/items", itemData);

// PUT update existing item (discountPercentage can be updated too)
export const updateItem = (id, itemData) => API.put(`/items/${id}`, itemData);

// DELETE item by ID
export const deleteItem = (id) => API.delete(`/items/${id}`);

export default API;
