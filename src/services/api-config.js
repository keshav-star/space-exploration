import axios from "axios";

const API_BASE_URL = "https://dummyjson.com";

const api = axios.create({
  baseURL: API_BASE_URL,
});

// api.interceptors.request.use(
//   (config) => {
    //Use this to pass token if you are using HTTPS only cookie
    //to store bearer access token.
    // config.withCredentials = true;

    //Use this to pass token if you have stored bearer access token
    //on any browser storage such as localstorage or session storage
    // const token = "access_token_123";
    // config.headers.Authorization = `Bearer ${token}`;
    // return config;
//   },
//   (error) => {
    // return Promise.reject(error);
//   }
// );

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default api;
