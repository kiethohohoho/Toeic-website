import axiosClient from "./axiosClient";

const AUTH_API = "/login";

const authApi = {
  postLogin: (info_user) => {
    const url = AUTH_API;
    return axiosClient.post(url, info_user);
  },
  postRefreshToken: (refresh_token) => {
    const url = AUTH_API + "/refresh-token";
    return axiosClient.post(url, refresh_token);
  },
  postLogout: () => {
    const url = AUTH_API + "/logout";
    return axiosClient.post(url);
  },
};

export default authApi;
