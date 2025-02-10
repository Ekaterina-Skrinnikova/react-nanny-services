export const selectNannies = (state) => state.nannies.nannies;

export const selectSavedNanny = (state) => state.nannies.savedNanny;

export const selectImage = (state) => state.nannies.image;

export const selectPage = (state) => state.nannies.page;

export const selectPerPage = (state) => state.nannies.perPage;

export const selectFaivoritesListNannies = (state) =>
  state.nannies.faivoritesListNannies;

export const selectSelectedItem = (state) => state.nannies.selectedItem;

export const selectIsExpanded = (state) => state.nannies.isExpanded;
