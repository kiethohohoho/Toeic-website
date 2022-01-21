import axios from "axios";
// import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
  },
  //   paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  config.params = config.params || {};

  config.headers["Authorization"] = ` Bearer  `;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },

  async (error) => {
    // Handle errors

    if (error.response) {
      //Call request token, access token expires
      if (error.request.status === 401) {
        try {
        } catch (error) {
          if (error.response && error.response.data) {
            return Promise.reject(error.response.data);
          }
          return Promise.reject(error);
        }
      }
    }
    return Promise.reject(error);
  }
);
export default axiosClient;
