import axios from "axios";

const baseURL =
  process.env.REACT_APP_API_URL && process.env.REACT_APP_API_URL !== "undefined"
    ? process.env.REACT_APP_API_URL
    : "https://product-based.errorr990551.workers.dev/api";

const api = axios.create({
  baseURL,
});

export default api;
