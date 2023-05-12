import api, { jsonHeader } from "./index";

export const fetchAllPayments = async () => api.get(`/payments`);
export const addPayment = async (data) =>
  api.post(`/payments`, data , jsonHeader);
