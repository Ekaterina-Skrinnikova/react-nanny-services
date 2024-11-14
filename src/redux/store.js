import { configureStore } from "@reduxjs/toolkit";
import nanniesReducer from "../redux/nannies/slice";
import filtersReducer from "../redux/filters/slice";
import modalReducer from "../redux/modal/slice";

export const store = configureStore({
  reducer: {
    nannies: nanniesReducer,
    filters: filtersReducer,
    modal: modalReducer,
  },
});
