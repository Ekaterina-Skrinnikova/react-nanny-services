import { createSlice } from "@reduxjs/toolkit";
import { getNannies } from "./operations";

const initialState = {
  nannies: [],
  faivoritesListNannies: [],
  savedNanny: null,
  image: null,

  page: 1,
  perPage: 3,
  countNannies: null,

  selectedItem: "A to Z",
  isLoading: false,
  error: null,
};

const nanniesSlice = createSlice({
  name: "nannies",
  initialState,
  reducers: {
    setSavedNanny: (state, action) => {
      state.savedNanny = action.payload;
    },

    setImage: (state, action) => {
      state.image = action.payload;
    },

    setPage: (state, action) => {
      state.page = action.payload;
    },

    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
      state.page = 1;
      state.nannies = [];
    },

    changeFaivoritesListNannies: (state, action) => {
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
      .addCase(getNannies.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getNannies.fulfilled, (state, action) => {
        const newNannies = action.payload.nanniesData.filter(
          (newNanny) =>
            !state.nannies.some(
              (existingNanny) => existingNanny.id === newNanny.id
            )
        );

        state.nannies = [...state.nannies, ...newNannies];
        state.countNannies = action.payload.countData;
        state.isLoading = false;
      })
      .addCase(getNannies.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export const {
  setSavedNanny,
  setImage,
  setPage,
  setSelectedItem,
  changeFaivoritesListNannies,
} = nanniesSlice.actions;

export default nanniesSlice.reducer;
