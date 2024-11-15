import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenPopUp: false,
  selectedItem: "A to Z",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleIsOpenPopUp: (state) => {
      state.isOpenPopUp = !state.isOpenPopUp;
    },

    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    },
  },
});

export const { toggleIsOpenPopUp, setSelectedItem } = modalSlice.actions;

export default modalSlice.reducer;
