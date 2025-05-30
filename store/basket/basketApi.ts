import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWith401Handling } from "../fetchBaseQuery";
import { TAddItemBasket } from "@/types/basket";
import { TProductBasket } from "@/types/product";

const basketApi = createApi({
  reducerPath: "basketApi",
  baseQuery: baseQueryWith401Handling,
  endpoints: (builder) => ({
    getBasket: builder.query<TAddItemBasket[], void>({
      query: () => "/basket/",
    }),
    addItemToBasket: builder.mutation<TAddItemBasket, TAddItemBasket>({
      query: (item) => ({
        url: "/basket/add/",
        method: "POST",
        body: item,
      }),
    }),
    removeItemFromBasket: builder.mutation<TAddItemBasket, TAddItemBasket>({
      query: (itemId) => ({
        url: `/basket/delete/`,
        method: "DELETE",
      }),
    }),
    updateItemInBasket: builder.mutation<TAddItemBasket, TAddItemBasket>({
      query: (item) => ({
        url: `/basket/update/`,
        method: "PATCH",
        body: item,
      }),
    }),
    mergeBasket: builder.mutation<TAddItemBasket[], TAddItemBasket[]>({
      query: (basket) => ({
        url: "/basket/merge/",
        method: "POST",
        body: basket,
      }),
    }),
    getBasketProductList: builder.query<TProductBasket[], string | void>({
      query: (param) =>
        param ? `/basket/productList?ids=${param}` : "/basket/productList/",
    }),
  }),
});

export const {
  useGetBasketQuery,
  useAddItemToBasketMutation,
  useRemoveItemFromBasketMutation,
  useUpdateItemInBasketMutation,
  useMergeBasketMutation,
  useGetBasketProductListQuery,
} = basketApi;

export default basketApi;
export type BasketApi = typeof basketApi;
