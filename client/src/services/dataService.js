import axios from "axios";

const baseURL = "https://localhost:5443/api/";

const client = axios.create();
client.defaults.baseURL = baseURL;

client.defaults.timeout = 3000;

client.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response.data;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  // @TODO add server error handling like 404 or 401
  return Promise.reject(error);
});

export default client;