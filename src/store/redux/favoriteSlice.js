import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteIds: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favoriteIds.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favoriteIds = state.favoriteIds.filter((item) => item !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
