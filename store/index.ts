// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./auth/authApi";
import authReducer from "./auth/authSlice";
import checkoutReducer from "./checkout/checkoutSlice";
import basketReducer from "./basket/basketSlice";
import { productsApi } from "./product/productsApi";
import { postsApi } from "./post/postsApi";
import { categoryApi } from "./category/categoryApi";
import { searchApi } from "./search/searchApi";
import basketApi from "./basket/basketApi";
import orderApi from "./order/orderApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    checkout: checkoutReducer,
    basket: basketReducer,
    // Registering the API slices
    [authApi.reducerPath]: authApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    [basketApi.reducerPath]: basketApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      productsApi.middleware,
      postsApi.middleware,
      categoryApi.middleware,
      searchApi.middleware,
      basketApi.middleware,
      orderApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
