import { createSlice } from "@reduxjs/toolkit";
import { fetchAllNannies } from "./operations";

const initialState = {
  nannies: [],
  isLoading: false,
  error: null,
};

const nanniesSlice = createSlice({
  name: "nannies",
  initialState,
  reducers: {},

  extraReducers: (builder) =>
    builder
      .addCase(fetchAllNannies.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllNannies.fulfilled, (state, action) => {
        state.nannies = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAllNannies.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export default nanniesSlice.reducer;
