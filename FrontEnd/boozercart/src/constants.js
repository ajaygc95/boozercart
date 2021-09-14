const baseUrl = "https://boozercartcore.azurewebsites.net";
// https://boozercartcore.azurewebsites.net

// http://localhost:8000/accounts/google/login/?process=login
const apiURL = "/api";

export const endpoint = `${baseUrl}${apiURL}`;

export const productListURL = `${endpoint}/item/`;
export const productDetailURL = (id) => `${endpoint}/items/${id}/`;
export const addToCartURL = `${endpoint}/cart/`;
export const orderItemDeleteURL = (slug) => `${endpoint}/delete-item/${slug}`;
export const orderItemUpdateUrl = `${endpoint}/order-item/`;
export const CartItemDetail = `${endpoint}/cart/`;
export const getStoreItems = `${endpoint}/get-store/`;
export const getStore = `${endpoint}/todos/`;
export const getuser = `${baseUrl}/user/users/`;
export const getAuth = `${baseUrl}/auth/`;
export const googlLogin = `${baseUrl}/accounts/google/login/`;
