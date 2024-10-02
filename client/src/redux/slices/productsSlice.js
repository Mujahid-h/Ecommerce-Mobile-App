const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: null,
    isLoading: false,
  },
  reducers: {
    addProduct: (state, action) => {
      state.data = action.payload;
    },
    addToWishlist: (state) => {
      state.data = state.data.push();
    },
  },
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
