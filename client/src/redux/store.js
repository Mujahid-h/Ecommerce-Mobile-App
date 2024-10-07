import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import WishlistSlice from "./slices/WishlistSlice";

const store = configureStore({
  reducer: {
    // Action will render here
    product: productsSlice,
    wishlist: WishlistSlice,
  },
});

export default store;
