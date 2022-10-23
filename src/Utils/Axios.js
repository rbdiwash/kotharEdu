import axios from "axios";
// import { REACT_APP_API_AUTHORIZATION_KEY } from "./Constants";

// axios.defaults.baseURL =
//   "https://cors-everywhere.herokuapp.com/" + process.env.REACT_APP_API_KEY;

// DEV;
axios.defaults.baseURL = process.env.REACT_APP_API_KEY;

// axios.defaults.headers = {
//   Authorization: REACT_APP_API_AUTHORIZATION_KEY,
//   "Content-Type": "application/json",
// };

export default axios;
