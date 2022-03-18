import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    isAuth: false,
    isRole: "admin",
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

export const { isPending, isLogin, isSuccess } = actions;

export const selectAuthorization = (state) => state.auth;

export default reducer;
