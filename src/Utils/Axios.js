// import { REACT_APP_API_AUTHORIZATION_KEY } from "./Constants";
import axios from "axios";
// axios.defaults.baseURL =
//   "https://cors-everywhere.herokuapp.com/" + process.env.REACT_APP_API_KEY;

// DEV;
// axios.defaults.baseURL =
//   "http://kotharedu.com:3000/kothar";
axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
axios.defaults.headers = {
  "Content-Type": "application/json",
};

// Add request interceptor to include token from localStorage
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log("token from axios:", token);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axios;
