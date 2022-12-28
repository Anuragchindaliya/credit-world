import axios from "axios";

const api = axios.create({
  baseURL: "https://credit-world.onrender.com/",
  // baseURL: "http://localhost:5000",
});

export const fetchBankData = (bankname) => {
  return api.get(`banks?slug=${bankname}`);
};

export const subscribe = (body) => {
  return api.post("subs", body);
};
export const getAllCards = () => {
  return api.get("cards");
};

export const getCardsByBankId = (bankId) => {
  return api.get(`cards?active=1&bankId=${bankId}`);
};
export default api;
