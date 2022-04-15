import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import navbarStatus from "./navbarSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    navbar: navbarStatus,
  },
});
