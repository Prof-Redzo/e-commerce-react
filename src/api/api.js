import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

export const getAllProducts = () => axios.get(API_URL);

export const getProductById = (id) => axios.get(`${API_URL}/${id}`);

export const addProduct = (product) => axios.post(API_URL, product);

export const updateProduct = (id, updatedProduct) =>
  axios.put(`${API_URL}/${id}`, updatedProduct);

export const deleteProduct = (id) => axios.delete(`${API_URL}/${id}`);
