import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase/firebaseConfig.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth/cordova";

import { onAuthStateChanged } from "firebase/auth";

export const registration = createAsyncThunk(
  "auth/registration",
  async ({ name, email, password }, thunkAPI) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      const user = auth.currentUser;

      await updateProfile(user, { displayName: name });

      return {
        uid: user.uid,
        accessToken: user.accessToken,
        name: user.displayName,
        email: user.email,
      };
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      const user = auth.currentUser;

      return {
        uid: user.uid,
        accessToken: user.accessToken,
        name: user.displayName,
        email: user.email,
      };
    } catch (error) {
      console.log("error:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await signOut(auth);
    localStorage.clear();
    // console.log("logout");
  } catch (error) {
    console.log("err:", error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // console.log("user", user);
//     // localStorage.setItem("user", JSON.stringify(user));
//   } else {
//     console.log("User is signed out");
//     localStorage.clear();
//   }
// });
