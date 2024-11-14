import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase/firebaseConfig";
import {
  ref,
  get,
  update,
  query,
  orderByKey,
  limitToFirst,
  startAt,
} from "firebase/database";
import { v4 as uuidv4 } from "uuid";

// export const getAllNannies = createAsyncThunk(
//   "nannies/getAllNannies",
//   async (_, thunkAPI) => {
//     try {
//       const dbRef = ref(db, "/");
//       const DataSnapshot = await get(dbRef);

//       if (DataSnapshot.exists()) {
//         const data = DataSnapshot.val();

//         Object.keys(data).forEach((key) => {
//           if (data[key].id) {
//             const uniqueId = uuidv4();
//             const recordRef = ref(db, `/${key}/id`);
//             update(recordRef, { id: uniqueId });
//           }
//         });

//         console.log(data);
//         return data;
//       } else {
//         console.log("No data available at the specified path.");
//         return {};
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const getFirstPage = createAsyncThunk(
  "nannies/getFirstPage",
  async (perPage, thunkAPI) => {
    try {
      const dbRef = ref(db, "/");
      const firstPageQuery = query(dbRef, orderByKey(), limitToFirst(perPage));

      const snapshot = await get(firstPageQuery);
      if (snapshot.exists()) {
        const items = snapshot.val();
        const itemKeys = Object.keys(items);
        // console.log(itemKeys);
        return { items, lastKey: itemKeys[itemKeys.length - 1] };
      } else {
        console.log("No data available");
        return { items: null, lastKey: null };
      }
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getNextPage = createAsyncThunk(
  "nannies/getNextPage",
  async ({ lastVisibleKey, perPage }, thunkAPI) => {
    try {
      const dbRef = ref(db, "/");
      const nextPageQuery = query(
        dbRef,
        orderByKey(),
        startAt(lastVisibleKey),
        limitToFirst(perPage + 1)
      );

      const snapshot = await get(nextPageQuery);
      if (snapshot.exists()) {
        const items = snapshot.val();
        const itemKeys = Object.keys(items);
        itemKeys.shift();

        return {
          items: Object.values(items).slice(1),
          lastKey: itemKeys[itemKeys.length - 1],
        };
      } else {
        console.log("No data available");
        return { items: null, lastKey: null };
      }
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
