import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase/firebaseConfig";
import {
  ref,
  get,
  update,
  query,
  limitToFirst,
  orderByChild,
  endAt,
  startAfter,
  startAt,
  endBefore,
  orderByKey,
} from "firebase/database";
import { v4 as uuidv4 } from "uuid";

const dbRef = ref(db, "/nannies");

export const getAllNannies = createAsyncThunk(
  "nannies/getAllNannies",
  async (_, thunkAPI) => {
    try {
      const dataSnapshot = await get(dbRef);

      // console.log("dataSnapshot", dataSnapshot);

      if (dataSnapshot.exists()) {
        const data = dataSnapshot.val();

        // console.log("data", data);

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

// export const getFirstPage = createAsyncThunk(
//   "nannies/getFirstPage",
//   async ({ perPage, option }, thunkAPI) => {
//     try {
//       let firstPageQuery;

//       switch (option) {
//         case "A to Z": {
//           firstPageQuery = query(
//             dbRef,
//             orderByChild("name_lowercase"),
//             limitToFirst(perPage)
//           );

//           console.log(firstPageQuery);

//           break;
//         }

//         case "Z to A": {
//           firstPageQuery = query(
//             dbRef,
//             orderByChild("name_lowercase"),
//             limitToFirst(perPage)
//           );
//           // console.log(firstPageQuery);
//           break;
//         }

//         case "Less than 10$": {
//           firstPageQuery = query(
//             dbRef,
//             orderByChild("price_per_hour"),
//             endAt(10),
//             limitToFirst(perPage)
//           );
//           // console.log(firstPageQuery);

//           break;
//         }

//         case "Greater than 10$": {
//           firstPageQuery = query(
//             dbRef,
//             orderByChild("price_per_hour"),
//             startAfter(10),
//             limitToFirst(perPage)
//           );
//           // console.log(firstPageQuery);
//           break;
//         }

//         case "Popular": {
//           firstPageQuery = query(
//             dbRef,
//             orderByChild("rating"),
//             startAt(4),
//             limitToFirst(perPage)
//           );
//           // console.log(firstPageQuery);
//           break;
//         }

//         case "Not popular": {
//           firstPageQuery = query(
//             dbRef,
//             orderByChild("rating"),
//             endBefore(4),
//             limitToFirst(perPage)
//           );
//           // console.log(firstPageQuery);
//           break;
//         }

//         case "Show all": {
//           firstPageQuery = query(dbRef, orderByChild("name_lowercase"));

//           break;
//         }

//         default: {
//           firstPageQuery = query(
//             dbRef,
//             orderByChild("name_lowercase"),
//             limitToFirst(perPage)
//           );

//           break;
//         }
//       }

//       const snapshot = await get(firstPageQuery);
//       // console.log("snapshot", snapshot);
//       if (snapshot.exists()) {
//         const items = snapshot.val();

//         console.log("items", items);

//         if (!Array.isArray(items)) {
//           const itemsKey = Object.keys(items);

//           console.log("itemsKey", itemsKey);
//           console.log("lastKey", itemsKey[itemsKey.length - 1]);

//           return {
//             items: Object.values(items),
//             lastKey: itemsKey[itemsKey.length - 1] || null,
//           };
//         }
//         console.log(items);

//         if (option === "Z to A") {
//           const itemsReverse = Object.values(items).reverse();
//           const itemsKey = Object.keys(itemsReverse);
//           console.log(itemsReverse);
//           return {
//             items: itemsReverse,
//             lastKey: itemsKey[itemsKey.length - 1],
//           };
//         }
//         const itemsKey = Object.keys(items);
//         // console.log(items);
//         return { items, lastKey: itemsKey[itemsKey.length - 1] || null };
//       }

//       // console.log(items);

//       return { items: {}, lastKey: null };
//     } catch (error) {
//       console.log(error);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const buildQuery = createAsyncThunk(
  "nannies/buildQuery",
  async ({ lastVisibleKey = null, perPage, option }, thunkAPI) => {
    try {
      console.log(option);
      console.log(lastVisibleKey);
      console.log(perPage);
      let pageQuery;

      switch (option) {
        case "A to Z": {
          pageQuery = query(
            dbRef,
            orderByChild("name_lowercase"),
            ...[...(lastVisibleKey ? [startAfter(lastVisibleKey)] : [])],
            limitToFirst(perPage)
          );
          console.log("pageQuery", pageQuery);
          break;
        }

        // case "Z to A": {
        //   pageQuery = query(
        //     dbRef,
        //     orderByChild("name_lowercase"),
        //     lastVisibleKey ? startAfter(lastVisibleKey) : undefined,
        //     limitToFirst(perPage + 1)
        //   );

        //   break;
        // }

        // case "Less than 10$": {
        //   pageQuery = query(
        //     dbRef,
        //     orderByChild("price_per_hour"),
        //     endAt(10),
        //     lastVisibleKey ? startAfter(lastVisibleKey) : undefined,
        //     limitToFirst(perPage + 1)
        //   );

        //   break;
        // }

        // case "Greater than 10$": {
        //   pageQuery = query(
        //     dbRef,
        //     orderByChild("price_per_hour"),
        //     startAfter(10),
        //     lastVisibleKey ? startAfter(lastVisibleKey) : undefined,
        //     limitToFirst(perPage + 1)
        //   );

        //   break;
        // }

        // case "Popular": {
        //   pageQuery = query(
        //     dbRef,
        //     orderByChild("rating"),
        //     startAt(10),
        //     lastVisibleKey ? startAfter(lastVisibleKey) : undefined,
        //     limitToFirst(perPage + 1)
        //   );

        //   break;
        // }

        // case "Not popular": {
        //   pageQuery = query(
        //     dbRef,
        //     orderByChild("rating"),
        //     endBefore(10),
        //     lastVisibleKey ? startAfter(lastVisibleKey) : undefined,
        //     limitToFirst(perPage + 1)
        //   );

        //   break;
        // }

        // case "Show all": {
        //   pageQuery = query(dbRef, orderByChild("name_lowercase"));

        //   break;
        // }

        // default: {
        //   pageQuery = query(
        //     dbRef,
        //     orderByChild("name_lowercase"),
        //     lastVisibleKey ? startAfter(lastVisibleKey) : undefined,
        //     limitToFirst(perPage + 1)
        //   );

        //   break;
        // }
      }

      const snapshot = await get(pageQuery);
      if (
        snapshot.exists() &&
        snapshot.val() &&
        typeof snapshot.val() === "object"
      ) {
        const items = snapshot.val();
        const itemsKey = Object.keys(items);
        // console.log("items", items);
        console.log("itemsKey", itemsKey);
        return {
          items: Object.values(items),
          lastKey: itemsKey[itemsKey.length - 1] || null,
        };
      }

      return { items: {}, lastKey: null };
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
