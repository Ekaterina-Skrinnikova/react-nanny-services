import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    email: null,
    password: null,
  },

  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(registration.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(registration.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export default authSlice.reducer;
