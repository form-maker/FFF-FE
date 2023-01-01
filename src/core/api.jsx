import axios from "axios";
import { SERVER_URL_API, SERVER_URL } from "../constants/env";

//-- API 추가 버전 --//
// 헤더 없이 사용하는 경우( API 추가 )
export const instanceApi = axios.create({
  baseURL: SERVER_URL_API,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

// 헤더 토큰 값이 들어가야 하는 경우( API 추가 )
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

//-- API 없는 버전 --//

// 헤더 없이 사용하는 경우( API 추가 )
export const instance = axios.create({
  baseURL: SERVER_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

// 헤더 토큰 값이 들어가야 하는 경우( API 추가 )
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
