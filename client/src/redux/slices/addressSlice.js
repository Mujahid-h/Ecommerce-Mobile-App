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
    updateAddress(state, action) {
      state.data = state.data.map((item) =>
        item.id === action.payload.id ? action.payload : ""
      );
    },
  },
});

export const { addAddress, deleteAddress, updateAddress } =
  addressSlice.actions;
export default addressSlice.reducer;
