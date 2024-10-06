import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";

const store = configureStore({
  reducer: {
    // Action will render here
    products: productsSlice,
  },
});

export default store;
