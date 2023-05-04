import api, { jsonHeader, filesHeader } from "./index";
const endPoint = "/contact-us";

export const fetchAllContactDetails = async () => api.get(endPoint);
export const saveNewContactUsData = async (formData) =>
  api.post(endPoint, formData, jsonHeader);
