const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: null,
    isLoading: false,
  },
  reducers: {
    addProducts: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
