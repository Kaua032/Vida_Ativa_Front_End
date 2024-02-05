import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "https://api-vidaativa.onrender.com";

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

export function FrequenceByDate(data) {
  const response = axios.get(`${baseURL}/frequence/consult`, {
    params: data,
  });
  return response;
}
