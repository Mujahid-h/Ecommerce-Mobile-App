import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    data: [],
  },
  reducers: {
    addToWishlist(state, action) {
      const existingItem = state.data.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // If item exists, increase its quantity
        return;
      } else {
        // If item does not exist, add it to the cart
        state.data.push({ ...action.payload, qty: 1 }); // Initialize qty to 1
      }
    },
  },
});

export const { addToWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
