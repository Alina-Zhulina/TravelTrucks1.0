// В operations.js або іншому файлі селекторів
export const selectCampers = (state) => state.campers.items.items;
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectIsError = (state) => state.campers.error;
