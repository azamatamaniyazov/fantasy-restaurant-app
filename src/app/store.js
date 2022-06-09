import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import basket from "../components/basket/basketSlice";
import component from "../components/componentsSlice";

export const store = configureStore({
  reducer: { [apiSlice.reducerPath]: apiSlice.reducer, basket, component },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});
