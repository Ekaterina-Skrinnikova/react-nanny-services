import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  typeHeader: "home",
};

const supportSlice = createSlice({
  name: "support",
  initialState,
  reducers: {},
});

export default supportSlice.reducer;
