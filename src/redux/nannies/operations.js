import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase/firebaseConfig";
import { ref, get } from "firebase/database";

export const getAllNannies = createAsyncThunk(
  "nannies/getAllNannies",
  async (_, thunkAPI) => {
    try {
      const dbRef = ref(db, "/");
      const DataSnapshot = await get(dbRef);
      if (DataSnapshot.exists()) {
        console.log(DataSnapshot.val());
        return DataSnapshot.val();
      } else {
        console.log("No data available at the specified path.");
        return {};
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getNannyById = createAsyncThunk(
  "nannies/getNannyById",
  async (nannyId, thunkAPI) => {
    try {
      const dbRef = ref(db, `/${nannyId}`);
      console.log(dbRef);
      const DataSnapshot = await get(dbRef);
      console.log(DataSnapshot);
      if (DataSnapshot.exists()) {
        console.log(DataSnapshot.val());
        return DataSnapshot.val();
      } else {
        console.log("No data available at the specified path.");
        return {};
      }
    } catch (error) {
      console.log("Error:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
