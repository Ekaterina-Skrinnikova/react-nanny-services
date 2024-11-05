import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase/firebaseConfig";
import { collection, getDocs, doc } from "firebase/firestore";

export const fetchAllNannies = createAsyncThunk(
  "nannies/fetchAllNannies",
  async (_, thunkAPI) => {
    try {
      const response = await getDocs(collection(db, "nannies"));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
