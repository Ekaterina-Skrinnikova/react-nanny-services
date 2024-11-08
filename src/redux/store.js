import { configureStore } from "@reduxjs/toolkit";
import nanniesReducer from "../redux/nannies/slice";

export const store = configureStore({
  reducer: { nannies: nanniesReducer },
});
