import axios from "axios";

export const api = axios.create({
  baseURL: "http://TU-IP:3000",
});