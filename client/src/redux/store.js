import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import WishlistSlice from "./slices/WishlistSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    // Action will render here
    product: productsSlice,
    wishlist: WishlistSlice,
    cart: cartSlice,
  },
});

export default store;
