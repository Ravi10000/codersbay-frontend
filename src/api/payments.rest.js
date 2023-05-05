import api, { jsonHeader } from "./index";

export const fetchAllPayments = async () => api.get(`/payments`);
