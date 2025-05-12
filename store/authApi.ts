// store/api/authApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery, baseQueryWith401Handling } from "@/store/fetchBaseQuery";
import { LoginFormData } from "@/components/LoginForm";
import { RegisterFormData } from "@/components/RegisterForm";
import { LOGIN_QUERY, REGISTER_QUERY } from "@/config/constants";
import { User } from "@/types/user";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWith401Handling,
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => "profile",
    }),
    loginUser: builder.mutation<User, LoginFormData>({
      query: (body) => ({
        url: LOGIN_QUERY,
        method: "POST",
        body,
      }),
    }),
    registerUser: builder.mutation<User, RegisterFormData>({
      query: (body: RegisterFormData) => ({
        url: REGISTER_QUERY,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetProfileQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
} = authApi;
