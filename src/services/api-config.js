import axios from "axios";

const API_BASE_URL1 = "https://dummyjson.com";
const API_BASE_URL2 = "https://api.nasa.gov";

const api1 = axios.create({
  baseURL: API_BASE_URL1,
});

const api2 = axios.create({
  baseURL: API_BASE_URL2,
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

api1.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api2.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export { api1, api2 };
