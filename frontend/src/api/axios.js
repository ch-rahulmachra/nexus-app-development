import axios from "axios";

export const authApi = axios.create({
  baseURL: process.env.REACT_APP_AUTH_URL
});

export const userApi = axios.create({
  baseURL: process.env.REACT_APP_USER_URL
});

const attachToken = config => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
};

authApi.interceptors.request.use(attachToken);
userApi.interceptors.request.use(attachToken);
