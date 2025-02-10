import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenModalReg: false,
  isOpenModalLogin: false,
  isOpenModalMakeAppointment: false,

  isOpenPopUp: false,
  isToggleTimePicker: false,

  selectedTimeOption: null,
  currentIndex: 3,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleIsOpenPopUp: (state) => {
      state.isOpenPopUp = !state.isOpenPopUp;
    },

    toggleTimePicker: (state) => {
      state.isToggleTimePicker = !state.isToggleTimePicker;
    },

    setSelectedTimeOption: (state, action) => {
      state.selectedTimeOption = action.payload;
    },

    setCurrentIndex: (state, action) => {
      state.currentIndex = action.payload;
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
      state.savedNanny = null;
      state.isOpenModalMakeAppointment = false;
    },
  },
});

export const {
  toggleIsOpenPopUp,
  toggleTimePicker,
  setSelectedTimeOption,
  setCurrentIndex,
  openModalReg,
  closeModalReg,
  openModalLogin,
  closeModalLogin,
  openModalMakeAppointment,
  closeModalMakeAppointment,
} = modalSlice.actions;

export default modalSlice.reducer;
