import { createSlice } from "@reduxjs/toolkit";
import { getAllNannies, getFirstPage, getNextPage } from "./operations";

const initialState = {
  nanniesAll: [],
  nannies: [],

  perPage: 3,
  lastVisibleKey: null,
  isExpanded: false,
  isLoading: false,
  error: null,
};

const nanniesSlice = createSlice({
  name: "nannies",
  initialState,
  reducers: {
    expanded: (state) => {
      state.isExpanded = !state.isExpanded;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(getAllNannies.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllNannies.fulfilled, (state, action) => {
        state.nanniesAll = action.payload || [];
        state.isLoading = false;
      })
      .addCase(getAllNannies.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getFirstPage.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getFirstPage.fulfilled, (state, action) => {
        state.nannies = action.payload.items || [];
        state.lastVisibleKey = action.payload.lastKey;
        state.isLoading = false;
      })
      .addCase(getFirstPage.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getNextPage.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getNextPage.fulfilled, (state, action) => {
        const newItems = action.payload.items || [];
        state.nannies = [...state.nannies, ...newItems];
        state.lastVisibleKey = action.payload.lastKey;
        state.isLoading = false;
      })
      .addCase(getNextPage.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

// export const sortedNannies = createSelector(
//   [
//     (state) => state.nannies.nanniesRender,
//     (state) => state.nannies.nanniesAll,
//     (state) => state.modal.selectedItem,
//   ],
//   (nannies, nanniesAll, option) => {
//     if (!nannies || !nanniesAll) return [];

//     switch (option) {
//       case "A to Z":
//         return [...nannies].sort((a, b) => a.name.localeCompare(b.name));
//       case "Z to A":
//         return [...nannies].sort((a, b) => b.name.localeCompare(a.name));
//       case "Less than 10$":
//         return [...nannies].filter((nanny) => nanny.price_per_hour <= 10);
//       case "More than 10$":
//         return [...nannies].filter((nanny) => nanny.price_per_hour > 10);
//       case "Popular":
//         return [...nannies].filter((nanny) => nanny.rating >= 4);
//       case "Not popular":
//         return [...nannies].filter((nanny) => nanny.rating < 4);
//       case "Show all":
//         return nanniesAll;

//       default:
//         return nannies;
//     }
//   }
// );

export const { expanded } = nanniesSlice.actions;

export default nanniesSlice.reducer;
