import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  typeHeader: "home",
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setTypeHeader: (state, action) => {
      state.typeHeader = action.payload;
    },
  },
});

export const { setTypeHeader } = headerSlice.actions;

export default headerSlice.reducer;
