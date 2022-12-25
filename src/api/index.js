import axios from "axios";

const api = axios.create({
  baseURL: "https://credit-world.onrender.com/",
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
  return api.get(`cards?bankId=${bankId}`);
};
export default api;
