import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase/firebaseConfig";
import { ref, get } from "firebase/database";

export const fetchAllNannies = createAsyncThunk(
  "nannies/fetchAllNannies",
  async (_, thunkAPI) => {
    try {
      const dbRef = ref(db, "/");
      console.log(dbRef);
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
