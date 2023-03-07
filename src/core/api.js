import axios from "axios";
import { SERVER_URL_API, SERVER_URL } from "../constants/env";

export const instanceApi = axios.create({
  baseURL: SERVER_URL_API,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export const baseURLApi = axios.create({
  baseURL: SERVER_URL_API,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

baseURLApi.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = localStorage.getItem("Authorization");
  config.headers["Authorization"] = `${token}`;
  return config;
});

export const refreshURLApi = axios.create({
  baseURL: SERVER_URL_API,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

refreshURLApi.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const refresh = localStorage.getItem("REFRESH_Authorization");
  config.headers["REFRESH_Authorization"] = `${refresh}`;
  return config;
});

baseURLApi.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    const originalRequest = config;
    if (status === 403 || status === 401 || status === 400) {
      try {
        const { headers } = await refreshURLApi.post("/refresh");
        const newAccessToken = headers.authorization;
        const newRefreshToken = headers.refresh_authorization;
        localStorage.setItem("Authorization", newAccessToken);
        localStorage.setItem("REFRESH_Authorization", newRefreshToken);
        originalRequest.headers.Authorization = newAccessToken;
        originalRequest.headers.REFRESH_Authorization = newRefreshToken;
        console.log(originalRequest);
        return await baseURLApi(originalRequest);
      } catch (err) {
        new Error(err);
      }
    }
    return Promise.reject(error);
  }
);

export const instance = axios.create({
  baseURL: SERVER_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export const baseURL = axios.create({
  baseURL: SERVER_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

baseURL.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = localStorage.getItem("Authorization");
  config.headers["Authorization"] = `${token}`;
  return config;
});
