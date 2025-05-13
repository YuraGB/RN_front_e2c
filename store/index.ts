// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./auth/authApi";
import authReducer from "./auth/authSlice";
import checkoutReducer from "./checkout/checkoutSlice";
import { productsApi } from "./product/productsApi";
import { postsApi } from "./post/postsApi";
import { categoryApi } from "./category/categoryApi";
import { searchApi } from "./search/searchApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    auth: authReducer,
    checkout: checkoutReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      productsApi.middleware,
      postsApi.middleware,
      categoryApi.middleware,
      searchApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
