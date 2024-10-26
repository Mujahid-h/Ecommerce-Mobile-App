import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
  },
  reducers: {
    addToCart(state, action) {
      const existingItem = state.data.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // If item exists, increase its quantity
        existingItem.qty += 1;
      } else {
        // If item does not exist, add it to the cart
        state.data.push({ ...action.payload }); // Initialize qty to 1
      }
    },
    removeFromCart(state, action) {
      const existingItemIndex = state.data.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        if (state.data[existingItemIndex].qty > 1) {
          state.data[existingItemIndex].qty -= 1;
        } else {
          // Remove the item if quantity becomes 0
          state.data.splice(existingItemIndex, 1);
        }
      }
      // If item doesn't exist, do nothing (as we're removing, not adding)
    },
    clearCart(state) {
      state.data = []; // Clear all items from the cart
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
