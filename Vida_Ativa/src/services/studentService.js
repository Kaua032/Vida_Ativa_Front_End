import axios from "axios";

const baseURL = "http://localhost:3000";

export function AllStudents(){
    const response = axios.get(`${baseURL}/student/all`);
    return response;
}