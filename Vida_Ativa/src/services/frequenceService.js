import axios from "axios";

const baseURL = "http://localhost:3000";

export function allFrequenceOnTheMonth() {
  const response = axios.get(`${baseURL}/frequence/allmonth`);
  return response;
}


export function allFrequenceOnTheWeek() {
  const response = axios.get(`${baseURL}/frequence/allweek`);
  return response
}