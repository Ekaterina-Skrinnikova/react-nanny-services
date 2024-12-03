import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase/firebaseConfig.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth/cordova";

export const registration = createAsyncThunk(
  "auth/registration",
  async ({ name, email, password }, thunkAPI) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, { displayName: name });

      console.log(userCredential);
      console.log("User registered:", userCredential.user);
      console.log("User registered:", typeof userCredential.user);
      console.log("Користувача зареєстровано з іменем:", user.displayName);
      return {
        uid: user.uid,
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
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      console.log(userCredential);
      console.log("User registered:", userCredential.user);
      console.log("Користувача зареєстровано з іменем:", user.displayName);

      return { uid: user.uid, name: user.displayName, email: user.email };
    } catch (error) {
      console.log("error:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
