import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenModalReg: false,
  isOpenModalLogin: false,

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

    openModalReg: (state) => {
      state.isOpenModalReg = true;
    },

    closeModalReg: (state) => {
      state.isOpenModalReg = false;
    },

    openModalLogin: (state) => {
      state.isOpenModalLogin = true;
    },

    closeModalLogin: (state) => {
      state.isOpenModalLogin = false;
    },
  },
});

export const {
  toggleIsOpenPopUp,
  setSelectedItem,
  openModalReg,
  closeModalReg,
  openModalLogin,
  closeModalLogin,
} = modalSlice.actions;

export default modalSlice.reducer;
