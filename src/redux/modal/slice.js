import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  isOpenModalReg: false,
  isOpenModalLogin: false,
  isOpenModalMakeAppointment: false,

  isOpenPopUp: false,
  isToggleTimePicker: false,
  selectedItem: "A to Z",
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

    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
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
      state.isOpenModalMakeAppointment = false;
    },
  },
});

export const {
  toggleIsOpenPopUp,
  toggleTimePicker,
  setSelectedItem,
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
