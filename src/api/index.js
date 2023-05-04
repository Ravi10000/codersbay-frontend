import axios from "axios";
axios.defaults.baseURL = import.meta.env.VITE_API_URL;
export const jsonHeader = { headers: { "Content-Type": "application/json" } };
export const filesHeader = {
  headers: { "Content-Type": "multipart/form-data" },
};
export default axios;
