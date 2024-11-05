import { createSlice } from "@reduxjs/toolkit";
import { build } from "vite";

const initialState = {
  isLoading: false,
};

const nanniesSlice = createSlice({
  name: "nannies",
  initialState,
  reducers: {},

  extraReducers: (builder) =>
    builder.addCase(
      fetchAllNannies.pending,
      (state) => (state.isLoading = true)
    ),
});
