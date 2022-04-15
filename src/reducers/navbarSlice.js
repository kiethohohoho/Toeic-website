import { createSlice } from "@reduxjs/toolkit";

const navbarSlide = createSlice({
  name: "navbarSlide",
  initialState: {
    show: true,
  },
  reducers: {
    isStatus(state) {
      state.show = !state.show;
    },
  },
});

const { actions, reducer } = navbarSlide;

export const { isStatus } = actions;

export const selectNavbarStatus = (state) => state.navbar;

export default reducer;
