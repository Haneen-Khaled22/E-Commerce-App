import { createSlice } from "@reduxjs/toolkit";

const FavSlice = createSlice({
  name: "favourite",
  initialState: {
    favourites: JSON.parse(localStorage.getItem("fav"))?.favourites || [],
  },

  reducers: {
    addToFavorite: (state, action) => {
      
      const exists = state.favourites.some((product) => product.id === action.payload.id);
      if (!exists) {
        state.favourites.push(action.payload);
        localStorage.setItem("fav", JSON.stringify(state)); 
      }
    },

    removeFromFavorite: (state, action) => {
     
      const index = state.favourites.findIndex((product) => product.id === action.payload.id);
      if (index !== -1) {
        state.favourites.splice(index, 1);
        localStorage.setItem("fav", JSON.stringify(state)); 
      }
    },
  },
});

export const { addToFavorite, removeFromFavorite } = FavSlice.actions;
export default FavSlice.reducer;
