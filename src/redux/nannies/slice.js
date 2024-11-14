import { createSlice } from "@reduxjs/toolkit";
import { getFirstPage, getNextPage } from "./operations";

const initialState = {
  nannies: [],

  perPage: 3,
  lastVisibleKey: null,
  isExpanded: false,
  isLoading: false,
  error: null,
};

const nanniesSlice = createSlice({
  name: "nannies",
  initialState,
  reducers: {
    expanded: (state) => {
      state.isExpanded = !state.isExpanded;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(getFirstPage.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getFirstPage.fulfilled, (state, action) => {
        state.nannies = action.payload.items || [];
        state.lastVisibleKey = action.payload.lastKey;
        state.isLoading = false;
      })
      .addCase(getFirstPage.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getNextPage.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getNextPage.fulfilled, (state, action) => {
        const newItems = action.payload.items || [];
        state.nannies = [...state.nannies, ...newItems];
        state.lastVisibleKey = action.payload.lastKey;
        state.isLoading = false;
      })
      .addCase(getNextPage.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export const { expanded } = nanniesSlice.actions;

export default nanniesSlice.reducer;
