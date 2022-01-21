import axiosClient from "./axiosClient";

const ACCOUNT_API = "/accounts";

const accountApi = {
  postVerifyEmailRegister: (email) => {
    const url = ACCOUNT_API + "/verify";
    return axiosClient.post(url, email);
  },
  postRegister: (info_user) => {
    const url = ACCOUNT_API + "/signup";
    return axiosClient.post(url, info_user);
  },
  postVerifyEmailForgotPassword: (email) => {
    const url = ACCOUNT_API + "/verify/forgot";
    return axiosClient.post(url, email);
  },
  postForgotPassword: (info_user) => {
    const url = ACCOUNT_API + "/forgot-pw";
    return axiosClient.post(url, info_user);
  },
  postChangePassword: (info_user) => {
    const url = ACCOUNT_API + "/change-pw";
    return axiosClient.post(url, info_user);
  },
};

export default accountApi;
