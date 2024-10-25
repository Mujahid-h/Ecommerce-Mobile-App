import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    data: null,
  },
  reducers: {
    orderItem(state, action) {
      state.data.push(action.payload);
    },
  },
});

export const { orderItem } = orderSlice.actions;
export default orderSlice.reducer;
