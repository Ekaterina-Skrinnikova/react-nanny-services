import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  valueFilters: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.valueFilters = action.payload;
    },
  },

  extraReducers: () => {},
});

export const { setFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
