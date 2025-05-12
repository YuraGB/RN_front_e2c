import { API_URL } from "@/config/constants";
import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { logout } from "./authSlice";
import { storage } from "@/utils/getPlatform";

export const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: async (headers) => {
    const token = await storage.getItem("accessToken");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
  // Використовуємо custom fetch для логування запиту
  // fetchFn: async (url, options) => {
  //   // Логуємо повний URL
  //   console.log("Request URL:", url);

  //   // Логуємо параметри запиту
  //   if (options?.body) {
  //     console.log("Request Body:", options.body);
  //   }
  //   if (options?.headers) {
  //     console.log("Request Headers:", options.headers);
  //   }

  //   // Робимо сам запит
  //   const response = await fetch(url, options);

  //   // Логуємо статус відповіді
  //   console.log("Response Status:", response.status);
  //   return response;
  // },
});

export const baseQueryWith401Handling: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    console.warn("Unauthorized - logging out...");
    await storage.deleteItem("accessToken");
    api.dispatch(logout());
  }

  return result;
};
