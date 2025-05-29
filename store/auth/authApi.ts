// store/api/authApi.ts
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWith401Handling } from "@/store/fetchBaseQuery";
import { LoginFormData } from "@/components/LoginForm";
import { RegisterFormData } from "@/components/RegisterForm";
import { LOGIN_QUERY, PROFILE_QUERY, REGISTER_QUERY } from "@/config/constants";
import { User } from "@/types/user";
import { mergeBasket } from "../basket/basketThunk";

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
          // ✅ Логін успішний, запускаємо асинхронний thunk для завантаження корзини
          if (data) {
            dispatch(mergeBasket());
          }
        } catch (err) {
          console.error("Login error:", err);
          // ❌ Можна також зробити toast або setError
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
          // ✅ Логін успішний, запускаємо асинхронний thunk для завантаження корзини
          if (data) {
            dispatch(mergeBasket());
          }
        } catch (err) {
          console.error("Login error:", err);
          // ❌ Можна також зробити toast або setError
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
