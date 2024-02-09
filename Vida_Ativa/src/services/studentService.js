import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:3000";

export function RegisterStudent(data) {
  const response = axios.post(`${baseURL}/student/register`, data, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function AllStudents() {
  const response = axios.get(`${baseURL}/student/all`);
  return response;
}
