import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    data: [],
  },
  reducers: {
    addToWishlist(state, action) {
      let tempData = state.data;
      tempData.push(action.payload);
      state.data = tempData;
    },
  },
});

export const { addToWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
