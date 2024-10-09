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
        state.data.push({ ...action.payload, qty: 1 }); // Initialize qty to 1
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
