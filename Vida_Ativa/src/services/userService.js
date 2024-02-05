import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "https://api-vidaativa.onrender.com";

export function signup(data) {
  const response = axios.post(`${baseURL}/user/register`, data, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
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

export function allUsers() {
  const response = axios.get(`${baseURL}/user/all`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function updateUser(data) {
  const response = axios.put(`${baseURL}/user/update`, data, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function updatePasswordUser(data) {
  const response = axios.put(`${baseURL}/user/changepassword`, data, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}
