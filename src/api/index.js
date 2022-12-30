import axios from "axios";

const api = axios.create({
  baseURL: "https://credit-world.onrender.com/",
  // baseURL: "http://localhost:5000",
  // baseURL: "/api",
});

export const fetchBankData = (bankname) => {
  return api.get(`banks?slug=${bankname}`);
};

export const subscribe = (body) => {
  return api.post("subs", body);
};
export const getAllSubs = () => {
  return api.get("subs");
};
export const downloadCSV = () => {
  return api.get("subs/export");
};
export const getAllCards = () => {
  return api.get("cards");
};
export const getAllBanks = () => {
  return api.get("banks");
};

export const getCardsByBankId = (bankId) => {
  return api.get(`cards?active=1&bankId=${bankId}`);
};
export default api;
