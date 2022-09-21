import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
axios.defaults.baseURL =
  process.env.REACT_APP_API_URL || process.env.apiUrl || "";
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  baseURL: process.env.REACT_APP_API_URL || "",
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // config.headers['Authorization'] = 'Bearer' + store.getters.token
    return config;
  },
  function (error) {
    // Do something with request error
    if (error.response.status === 401 || error.response.status === 400)
      return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Do something with response error
    if (error.response.status === 401 || error.response.status === 400)
      // console.log("interceptor")
      return Promise.reject(error.response);
  }
);

export default _axios;
