import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    // isLoading: true,
    // isAuth: JSON.parse(localStorage.getItem("role")) ? true : true,
    // isRole: JSON.parse(localStorage.getItem("role"))
    //   ? JSON.parse(localStorage.getItem("role"))
    //   : "admin",

    isLoading: false,
    isAuth: JSON.parse(localStorage.getItem("role")) ? true : false,
    isRole: JSON.parse(localStorage.getItem("role"))
      ? JSON.parse(localStorage.getItem("role"))
      : null,
  },
  reducers: {
    isPending(state) {
      state.isLoading = true;
    },
    isLogin(state, action) {
      state.isLoading = false;
      state.isAuth = true;
      state.isRole = action.payload;
    },
    isSuccess(state) {
      state.isAuth = true;
      state.isLoading = false;
    },
    isLogout(state) {
      state.isAuth = false;
      state.isRole = null;
    },
  },
});

const { actions, reducer } = authSlice;

export const { isPending, isLogin, isSuccess, isLogout } = actions;

export const selectAuthorization = (state) => state.auth;

export default reducer;
