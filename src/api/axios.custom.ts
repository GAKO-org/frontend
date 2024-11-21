import axios from "axios";
import { getCookie } from "./cookie";

const instance = axios.create({
  baseURL: "/api",
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});

instance.interceptors.request.use(async (config: any) => {
  const token = getCookie("jwt");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    delete config.headers.Authorization;
  }
  return config;
});
instance.defaults.maxRedirects = 5;

const axiosSettingModifyURL = "/user/profile/update";

/**
 * 웹소켓인지 확인하기 -> 아직 안정해짐
 */
