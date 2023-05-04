import api, { jsonHeader, filesHeader } from "./index";

export const fetchSkuByServiceName = async (serviceName) =>
  api.get(`/sku/${serviceName}`);
