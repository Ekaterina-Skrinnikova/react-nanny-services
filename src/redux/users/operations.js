import { createAsyncThunk } from "@reduxjs/toolkit";
import auth from "../../firebase/firebaseConfig";

const registration = createAsyncThunk(
  "auth/registration",
  async ({ email, password }, thunkAPI) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User registered:", userCredential.user);
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
