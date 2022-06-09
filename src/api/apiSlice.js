import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://restaurant.my-project.site/api",
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/category",
    }),
    getAllProducts: builder.query({
      query: () => "/product",
    }),
  }),
});

export const { useGetCategoriesQuery, useGetAllProductsQuery } = apiSlice;
