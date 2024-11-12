import { createSlice } from "@reduxjs/toolkit";
import { getAllNannies, getNannyById } from "./operations";

const initialState = {
  nannies: [],
  nanny: null,

  isLoading: false,
  error: null,
};

const nanniesSlice = createSlice({
  name: "nannies",
  initialState,
  reducers: {},

  extraReducers: (builder) =>
    builder
      .addCase(getAllNannies.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllNannies.fulfilled, (state, action) => {
        state.nannies = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllNannies.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getNannyById.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getNannyById.fulfilled, (state, action) => {
        state.nanny = action.payload;
        state.isLoading = false;
      })
      .addCase(getNannyById.rejected, (state, action) => {
        state.error = action.error;
        state.isLoading = false;
      }),
});

export default nanniesSlice.reducer;
