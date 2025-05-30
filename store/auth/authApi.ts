// store/api/authApi.ts
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWith401Handling } from "@/store/fetchBaseQuery";
import { LOGIN_QUERY, PROFILE_QUERY, REGISTER_QUERY } from "@/config/constants";
import { User } from "@/types/user";
import { setUserMergeBasket } from "./authService";
import { RegisterFormData } from "@/types/register";
import { LoginFormData } from "@/types/login";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWith401Handling,
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => PROFILE_QUERY,
    }),
    loginUser: builder.mutation<{ user: User }, LoginFormData>({
      query: (body) => ({
        url: LOGIN_QUERY,
        method: "POST",
        body,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          if (data?.user?.token) {
            setUserMergeBasket(data, dispatch);
          }
        } catch (err) {
          console.error("Login error:", err);
          // todo toast
        }
      },
    }),
    registerUser: builder.mutation<{ user: User }, RegisterFormData>({
      query: (body: RegisterFormData) => ({
        url: REGISTER_QUERY,
        method: "POST",
        body,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          if (data?.user?.token) {
            setUserMergeBasket(data, dispatch);
          }
        } catch (err) {
          console.error("Login error:", err);
          // todo toast
        }
      },
    }),
  }),
});

export const {
  useGetProfileQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
} = authApi;
