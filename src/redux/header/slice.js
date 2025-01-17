import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  typeHeader: "home",
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setHeaderType: (state, action) => {
      state.typeHeader = action.payload;
    },
  },
});

export const { setHeaderType } = headerSlice.actions;

export default headerSlice.reducer;
