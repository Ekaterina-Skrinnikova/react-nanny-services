export const selectNannies = (state) => state.nannies.nannies;

export const selectNanniesAll = (state) => state.nannies.nanniesAll;

export const selectSavedNanny = (state) => state.nannies.savedNanny;

export const selectImage = (state) => state.nannies.image;

export const selectFaivoritesListNannies = (state) =>
  state.nannies.faivoritesListNannies;

export const selectPerPage = (state) => state.nannies.perPage;

export const selectOption = (state) => state.nannies.option;

export const selectLastVisibleKey = (state) => state.nannies.lastVisibleKey;

export const selectIsExpanded = (state) => state.nannies.isExpanded;
