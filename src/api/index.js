import axios from "axios";
import { sleep } from "./utils.ts";
const api = axios.create({
  baseURL: "https://credit-world.onrender.com/",
  // baseURL: "http://localhost:5000",
  // baseURL: "/api",
});
// const addSleep = async (func)=>{
//   await sleep(1000);
//   return await func()
// }
api.interceptors.response.use(async (response) => {
  // if (process.env.NODE_ENV === 'development') {
    await sleep(10000);
  // }
  return response;
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
export const registerRequest = (body) => {
  return api.post("requests", body);
};
export const registerEngage = (body) => {
  return api.post("engage", body);
};
export const registerApplier = (body) => {
  return api.post("applier", body);
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
