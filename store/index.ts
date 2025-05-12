// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./authApi";
import authReducer from "./authSlice";
import { productsApi } from "./productsApi";
import { postsApi } from "./postsApi";
import { categoryApi } from "./categoryApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      productsApi.middleware,
      postsApi.middleware,
      categoryApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
