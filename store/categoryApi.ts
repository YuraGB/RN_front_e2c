import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWith401Handling } from "./fetchBaseQuery";
import {
  CATEGORY_BY_NAME_QUERY,
  CATEGORY_LIST_QUERY,
} from "@/config/constants";

export const categoryApi = createApi({
  baseQuery: baseQueryWith401Handling,
  endpoints: (builder) => ({
    getCategoryList: builder.query({
      query: () => CATEGORY_LIST_QUERY,
    }),
    getCategoryByName: builder.query({
      query: ({ name }) => CATEGORY_BY_NAME_QUERY + name,
    }),
  }),
});

export const { useGetCategoryListQuery, useGetCategoryByNameQuery } =
  categoryApi;
