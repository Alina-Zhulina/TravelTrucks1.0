import { createSlice } from "@reduxjs/toolkit";
import { getCampers } from "./operations";

const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

const INITIAL_VALUES = {
  items: {
    items: [],
    total: null,
  },
  favorites: savedFavorites,
  isLoading: false,
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState: INITIAL_VALUES,
  reducers: {
    toggleFavorite: (state, { payload }) => {
      if (state.favorites.includes(payload)) {
        state.favorites = state.favorites.filter((id) => id !== payload);
      } else {
        state.favorites.push(payload);
      }
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, (state) => {
        state.items = { items: [], total: null };
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCampers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(getCampers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});
export const { toggleFavorite } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
