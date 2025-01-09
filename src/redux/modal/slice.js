import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenModalReg: false,
  isOpenModalLogin: false,
  isOpenModalMakeAppointment: false,

  isOpenPopUp: false,
  IsOpenTimePicker: false,
  selectedItem: "A to Z",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleIsOpenPopUp: (state) => {
      state.isOpenPopUp = !state.isOpenPopUp;
    },

    toggleIsOpenTimePicker: (state) => {
      state.IsOpenTimePicker = !state.IsOpenTimePicker;
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

    openModalMakeAppointment: (state) => {
      state.isOpenModalMakeAppointment = true;
    },

    closeModalMakeAppointment: (state) => {
      state.isOpenModalMakeAppointment = false;
    },
  },
});

export const {
  toggleIsOpenPopUp,
  toggleIsOpenTimePicker,
  setSelectedItem,
  openModalReg,
  closeModalReg,
  openModalLogin,
  closeModalLogin,
  openModalMakeAppointment,
  closeModalMakeAppointment,
} = modalSlice.actions;

export default modalSlice.reducer;
