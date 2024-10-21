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
  },
});

export const { addAddress } = addressSlice.actions;
export default addressSlice.reducer;
