import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: localStorage.getItem("cartProducts")
    ? JSON.parse(localStorage.getItem("cartProducts"))
    : [],
  peoples: localStorage.getItem("peoples")
    ? localStorage.getItem("peoples")
    : 1,
};

const basketSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartProducts.push(action.payload);
    },
    deleteCartProduct: (state, action) => {
      state.cartProducts = action.payload;
    },
    updateCounter: (state, action) => {
      state.cartProducts[action.payload.index].count = action.payload.counter;
    },
    setPeoples: (state, action) => {
      state.peoples = action.payload;
    },
  },
});

export const { addToCart, deleteCartProduct, updateCounter, setPeoples } =
  basketSlice.actions;

export default basketSlice.reducer;
