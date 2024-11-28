import { configureStore } from "@reduxjs/toolkit";
import nanniesReducer from "../redux/nannies/slice";
import modalReducer from "../redux/modal/slice";
import authReducer from "../redux/users/slice";

export const store = configureStore({
  reducer: {
    nannies: nanniesReducer,
    modal: modalReducer,
    auth: authReducer,
  },
});
