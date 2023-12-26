import axios from "axios";

const baseURL = "http://localhost:3000";

export function allFrequenceOnTheMonth() {
  const response = axios.get(`${baseURL}/frequence/allmonth`);
  return response;
}
