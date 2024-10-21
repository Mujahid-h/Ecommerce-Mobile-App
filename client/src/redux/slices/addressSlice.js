import { createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
  name: "address",
  initialState: {
    data: [],
  },
  reducers: {
    addAddress(state, action) {
      state.data.push(action.payload);
    },
    deleteAddress(state, action) {
      state.data = state.data.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addAddress, deleteAddress } = addressSlice.actions;
export default addressSlice.reducer;
