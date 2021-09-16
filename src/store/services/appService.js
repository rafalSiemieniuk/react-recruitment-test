import http from 'http/http';

export async function fetchProducts() {
  const response = await http.get(`/api/cart`);
  return response.data;
}

export async function checkProduct(payload) {
  const response = await http.post(`/api/product/check`, payload);
  return response.data;
}
