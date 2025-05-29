import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "@/store/fetchBaseQuery";
import { TProduct } from "@/types/product";

export const searchApi = createApi({
  reducerPath: "search",
  baseQuery,
  endpoints: (builder) => ({
    getSearchResalts: builder.query<TProduct[], string>({
      query: (arg: string) => `/search?q=${arg}`,
    }),
  }),
});

export const { useGetSearchResaltsQuery, useLazyGetSearchResaltsQuery } =
  searchApi;
