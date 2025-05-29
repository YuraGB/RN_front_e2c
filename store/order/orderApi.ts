import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery, baseQueryWith401Handling } from "../fetchBaseQuery";
import { OrderInputType } from "@/types/order";
import { SET_ORDER_QUERY } from "@/config/constants";

const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    createOrder: builder.mutation<void, OrderInputType>({
      query: (orderData) => ({
        url: SET_ORDER_QUERY,
        method: "POST",
        body: orderData,
      }),
    }),
    getOrderDetails: builder.query({
      query: () => ({
        url: `/`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetOrderDetailsQuery, useCreateOrderMutation } = orderApi;
export default orderApi;
