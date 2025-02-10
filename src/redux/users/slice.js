import { createSlice } from "@reduxjs/toolkit";
import { login, logout, registration } from "./operations";

const initialState = {
  user: null,
  accessToken: null,

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
        console.log("user", action.payload.user);
        state.user = action.payload.user;
        state.accessToken = action.payload.session.access_token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(registration.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.session.access_token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isLoading = false;
        state.isLoggedIn = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export default authSlice.reducer;
