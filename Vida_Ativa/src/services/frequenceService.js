import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:3000";

export function allFrequenceOnTheMonth() {
  const response = axios.get(`${baseURL}/frequence/allmonth`);
  return response;
}

export function allFrequenceOnTheWeek() {
  const response = axios.get(`${baseURL}/frequence/allweek`);
  return response;
}

export function addFrequence(data) {
  const response = axios.post(`${baseURL}/frequence/add`, data, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}
