import { configureStore } from "@reduxjs/toolkit";
import nanniesReducer from "../redux/nannies/slice";
import modalReducer from "../redux/modal/slice";
import authReducer from "../redux/users/slice";
import supportReducer from "../redux/support/slice";

// save state to localStorage
const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("stateData", serializedState);
  } catch (error) {
    console.error("State isn`t save:", error);
  }
};

// load state from localStorage
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("stateData");
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("State is not load:", error);
  }
};
// for load state
const preloadedState = loadFromLocalStorage();

export const store = configureStore({
  reducer: {
    nannies: nanniesReducer,
    modal: modalReducer,
    auth: authReducer,
    support: supportReducer,
  },
  preloadedState, // завантажуємо збережений стан
});

//getState()-повертає весь поточний стан з Redux
//subscribe()-підписка на зміни в стані

store.subscribe(() => saveToLocalStorage(store.getState()));
