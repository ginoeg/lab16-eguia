import axios from "axios";

const usuarioApi = axios.create({
  baseURL: "https://639bfb0f42e3ad692723be08.mockapi.io/productos",
});

export const getProducts = async () => {
  const res = await usuarioApi.get("/");
  return res.data;
};

export const getProductById = (id) => usuarioApi.get(`/${id}`);

export const createProduct = (product) => usuarioApi.post("/", product);

export const updateProduct = (product) =>
usuarioApi.put(`/${product.id}`, product);

export const deleteProduct = (id) => usuarioApi.delete(`/${id}`);

export default usuarioApi;
