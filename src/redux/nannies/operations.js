import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase/firebaseConfig";
import { ref, get, update } from "firebase/database";
import { v4 as uuidv4 } from "uuid";

export const getAllNannies = createAsyncThunk(
  "nannies/getAllNannies",
  async (_, thunkAPI) => {
    try {
      const dbRef = ref(db, "/");
      const DataSnapshot = await get(dbRef);

      if (DataSnapshot.exists()) {
        const data = DataSnapshot.val();

        Object.keys(data).forEach((key) => {
          if (data[key].id) {
            const uniqueId = uuidv4();
            const recordRef = ref(db, `/${key}/id`);
            update(recordRef, { id: uniqueId });
          }
        });

        console.log(data);
        return data;
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
      const dbRef = ref(db);
      console.log(dbRef);
      const DataSnapshot = await get(child(dbRef, `/${nannyId}`));
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
