import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    data: [],
  },
  reducers: {
    orderItem(state, action) {
      state.data.push({
        orderId: "ORD" + Date.now(),
        orderDate: new Date().toLocaleString(),
        items: action.payload,
        totalAmount: action.payload.reduce(
          (total, item) => total + item.price * item.qty,
          0
        ),
      });
    },
  },
});

export const { orderItem } = orderSlice.actions;
export default orderSlice.reducer;
