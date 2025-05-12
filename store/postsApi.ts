// store/api/postsApi.ts
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWith401Handling } from "@/store/fetchBaseQuery";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: baseQueryWith401Handling,
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (parans?: string) => `/posts${parans ? `?${parans}` : "/"}`,
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
