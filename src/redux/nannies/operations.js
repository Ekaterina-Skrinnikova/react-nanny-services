import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase/firebaseConfig";
import {
  ref,
  get,
  update,
  query,
  orderByKey,
  limitToFirst,
  orderByChild,
  endAt,
  startAfter,
  startAt,
  endBefore,
} from "firebase/database";
import { v4 as uuidv4 } from "uuid";

const dbRef = ref(db, "/nannies");
// console.log(dbRef);

export const getAllNannies = createAsyncThunk(
  "nannies/getAllNannies",
  async (_, thunkAPI) => {
    try {
      const DataSnapshot = await get(dbRef);

      if (DataSnapshot.exists()) {
        const data = DataSnapshot.val();

        // const updateRef = ref(db, "nannies/27");
        // update(updateRef, { rating: 3 });
        Object.keys(data).forEach((key) => {
          if (!data[key].id && !data[key].name_lowercase) {
            const uniqueId = uuidv4();
            const recordRef = ref(db, `/nannies/${key}`);
            update(recordRef, {
              id: uniqueId,
              name_lowercase: data[key].name.toLowerCase(),
            });
          }
        });

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

export const getFirstPage = createAsyncThunk(
  "nannies/getFirstPage",
  async (option, thunkAPI) => {
    try {
      console.log(option);
      let firstPageQuery;

      switch (option) {
        case "A to Z": {
          firstPageQuery = query(
            dbRef,
            orderByChild("name_lowercase")
            // limitToFirst(perPage)
          );

          // console.log(firstPageQuery);

          break;
        }

        case "Z to A": {
          firstPageQuery = query(
            dbRef,
            orderByChild("name_lowercase")
            // limitToFirst(perPage)
          );
          // console.log(firstPageQuery);
          break;
        }

        case "Less than 10$": {
          firstPageQuery = query(
            dbRef,
            orderByChild("price_per_hour"),
            endBefore(10)
            // limitToFirst(perPage)
          );
          // console.log(firstPageQuery);

          break;
        }

        case "Greater than 10$": {
          firstPageQuery = query(
            dbRef,
            orderByChild("price_per_hour"),
            startAfter(10)
            // limitToFirst(perPage)
          );
          // console.log(firstPageQuery);
          break;
        }

        case "Popular": {
          firstPageQuery = query(
            dbRef,
            orderByChild("rating"),
            startAt(4)
            // limitToFirst(perPage)
          );
          // console.log(firstPageQuery);
          break;
        }

        case "Not popular": {
          firstPageQuery = query(
            dbRef,
            orderByChild("rating"),
            endBefore(4)
            // limitToFirst(perPage)
          );
          // console.log(firstPageQuery);
          break;
        }

        case "Show all": {
          firstPageQuery = query(dbRef, orderByChild("name_lowercase"));

          break;
        }

        default: {
          firstPageQuery = query(
            dbRef,
            orderByChild("name_lowercase")
            // limitToFirst(perPage)
          );

          break;
        }
      }

      const snapshot = await get(firstPageQuery);
      // console.log(snapshot);
      if (snapshot.exists()) {
        const items = snapshot.val();

        if (!Array.isArray(items)) {
          const itemsKey = Object.keys(items);

          return {
            items: Object.values(items),
            lastKey: itemsKey[itemsKey.length - 1] || null,
          };
        }
        console.log(items);

        if (option === "Z to A") {
          const itemsReverse = Object.values(items).reverse();
          const itemsKey = Object.keys(itemsReverse);
          console.log(itemsReverse);
          return {
            items: itemsReverse,
            lastKey: itemsKey[itemsKey.length - 1],
          };
        }
        const itemsKey = Object.keys(items);
        // console.log(items);
        return { items, lastKey: itemsKey[itemsKey.length - 1] || null };
      }

      // console.log(items);

      return { items: {}, lastKey: null };
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getNextPage = createAsyncThunk(
  "nannies/getNextPage",
  async ({ lastVisibleKey, perPage, option }, thunkAPI) => {
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
