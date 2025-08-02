import axios from "axios";
const baseURL = import.meta.env.VITE_API_URL;
const baseURLForUsers = import.meta.env.VITE_USERS_API;

export const api = axios.create({
  baseURL: baseURL
})

export const userApi = axios.create({
  baseURL: baseURLForUsers
})