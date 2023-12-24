import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:3000";

export function signup(data) {
  const response = axios.post(`${baseURL}/user/register`, data);
  return response;
}

export function signin(data) {
  const response = axios.post(`${baseURL}/auth`, data);
  return response;
}

export function findUser() {
  const response = axios.get(`${baseURL}/user/finduser`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}
