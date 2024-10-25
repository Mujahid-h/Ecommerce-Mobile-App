import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "products",
  initialState: {
    data: null,
    isLoading: false,
  },
  reducers: {
    orderItem(state, action) {
      state.data.push(action.payload);
    },
  },
});

export const { orderItem } = orderSlice.actions;
export default orderSlice.reducer;
