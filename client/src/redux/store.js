import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import WishlistSlice from "./slices/WishlistSlice";
import cartSlice from "./slices/cartSlice";
import addressSlice from "./slices/addressSlice";

const store = configureStore({
  reducer: {
    // Action will render here
    product: productsSlice,
    wishlist: WishlistSlice,
    cart: cartSlice,
    address: addressSlice,
  },
});

export default store;
