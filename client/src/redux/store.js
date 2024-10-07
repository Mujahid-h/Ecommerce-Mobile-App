import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";

const store = configureStore({
  reducer: {
    // Action will render here
    product: productsSlice,
  },
});

export default store;
