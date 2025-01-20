import { createSlice } from "@reduxjs/toolkit";
import { buildQuery, getAllNannies } from "./operations";

const initialState = {
  nanniesAll: [],
  nannies: [],

  faivoritesListNannies: JSON.parse(localStorage.getItem("faivorites")) || [],

  savedNanny: null,

  image: null,

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

    setSavedNanny: (state, action) => {
      state.savedNanny = action.payload;
    },

    setImage: (state, action) => {
      state.image = action.payload;
    },

    changeFaivoritesListNannies: (state, action) => {
      if (!state.faivoritesListNannies) {
        state.faivoritesListNannies = [];
      }

      if (!state.faivoritesListNannies.includes(action.payload)) {
        state.faivoritesListNannies = [
          ...state.faivoritesListNannies,
          action.payload,
        ];
      } else {
        state.faivoritesListNannies = state.faivoritesListNannies.filter(
          (id) => id !== action.payload
        );
      }
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
      .addCase(buildQuery.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(buildQuery.fulfilled, (state, action) => {
        const newItems = Object.values(action.payload.items) || [];
        state.nannies = Array.from(
          new Map(
            [...state.nannies, ...newItems].map((el) => [el.id, el])
          ).values()
        );
        state.lastVisibleKey = action.payload.lastKey;
        state.isLoading = false;
      })
      .addCase(buildQuery.rejected, (state, action) => {
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

export const {
  expanded,
  setSavedNanny,
  setImage,
  changeFaivoritesListNannies,
} = nanniesSlice.actions;

export default nanniesSlice.reducer;
