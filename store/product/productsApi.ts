// store/api/authApi.ts
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "@/store/fetchBaseQuery";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery,
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (parans?: string) => `/products${parans ? `?${parans}` : ""}`,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
