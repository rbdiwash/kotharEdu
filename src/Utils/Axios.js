// import { REACT_APP_API_AUTHORIZATION_KEY } from "./Constants";
import axios from "axios";
// axios.defaults.baseURL =
//   "https://cors-everywhere.herokuapp.com/" + process.env.REACT_APP_API_KEY;

// DEV;
const token = localStorage.getItem("token");
axios.defaults.baseURL = "http://kothareducationalservices.com:3000/kothar";

axios.defaults.headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

export default axios;
