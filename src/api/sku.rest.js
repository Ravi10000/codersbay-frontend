import api, { jsonHeader, filesHeader } from "./index";

export const fetchSkuByServiceName = async (serviceName) =>
  api.get(`/sku/${serviceName}`);

export const fetchAllSkus = async () => api.get(`/sku`);

export const saveSku = async (formData) =>
  api.post("/sku", formData, jsonHeader);

export const editSku = async (id, formData) =>
  api.put(`/sku/${id}`, formData, jsonHeader);

export const deleteSku = async (id) => api.delete(`/sku/${id}`);
