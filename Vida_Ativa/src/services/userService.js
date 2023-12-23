import axios from "axios";

const baseURL = "http://localhost:3000";

export function signup(data) {
  const response = axios.post(`${baseURL}/user/register`, data);
  return response;
}

export function signin(data) {
  const response = axios.post(`${baseURL}/auth`, data);
  return response;
}
