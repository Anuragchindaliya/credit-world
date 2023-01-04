import axios from "axios";

const api = axios.create({
  baseURL: "https://credit-world.onrender.com/",
  // baseURL: "http://localhost:5000",
  // baseURL: "/api",
});

// BANK
export const fetchBankData = (bankname) => {
  return api.get(`banks?slug=${bankname}`);
};
export const getAllBanks = () => {
  return api.get("banks");
};

// SUBSCRIBERS
export const subscribe = (body) => {
  return api.post("subs", body);
};
export const getAllSubs = () => {
  return api.get("subs");
};
export const downloadCSV = () => {
  return api.get("subs/export");
};

// APPLICANTS
export const registerApplicant = (body) => {
  return api.post("applicants", body);
};
export const getAllApplicants = (bankId) => {
  return api.get(`applicants?bankId=${bankId}`);
};
export const applicantsExport = (bankId) => {
  return api.get(`applicants/export?bankId=${bankId}`);
};

// CARDS
export const getAllCards = () => {
  return api.get(`cards`);
};
export const getCardsByBankId = (bankId) => {
  return api.get(`cards?active=1&bankId=${bankId}`);
};

export default api;
