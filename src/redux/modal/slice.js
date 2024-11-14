import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenPopUp: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleIsOpenPopUp: (state) => {
      state.isOpenPopUp = !state.isOpenPopUp;
    },
  },
});

export const { toggleIsOpenPopUp } = modalSlice.actions;

export default modalSlice.reducer;
