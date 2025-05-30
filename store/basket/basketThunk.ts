import { storage } from "@/utils/getPlatform";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setBasket, setProductList } from "./basketSlice";
import { RootState, AppDispatch } from "@/store/index";

import { updateOrAddItem } from "./basketService";
import { API_URL } from "@/config/constants";
import basketApi from "./basketApi";
import { formatItem, mapBasketState } from "@/utils/mapBasketState";
import { BasketState, TItem } from "@/types/basket";
import { AppState } from "react-native";

export const getBasket = createAsyncThunk(
  "basket/getBasket",
  // This function fetches the basket from the server
  // It first checks if the user is logged in by checking for a token
  // If the user is logged in, it fetches the basket from the server
  // If the user is not logged in, it does nothing
  // It then dispatches the setBasket action with the fetched data
  // If there is an error, it logs the error to the console
  // and does not update the state
  async (_, { dispatch }) => {
    try {
      const token = await storage.getItem("accessToken");
      if (token === null || token === undefined || token === "undefined")
        return;

      const response = await fetch(`${API_URL}/basket/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        console.log("Error fetching basket:", response.statusText);
        return;
      }

      const data: TItem[] = await response.json();

      dispatch(setBasket({ items: mapBasketState(data) }));
    } catch (error) {
      console.error("Error fetching basket:", error);
    }
  },
);

export const mergeBasket = createAsyncThunk(
  "basket/mergeBasket",
  // This function merges the local basket with the server basket
  // It first checks if the user is logged in by checking for a token
  // If the user is logged in, it checks if the basket is empty
  // If the basket is empty, it fetches the server basket and sets it in the state
  // If the basket is not empty, it merges the local basket with the server basket
  // and sets the merged basket in the state
  // If the user is not logged in, it does nothing
  async (_, { dispatch, getState }) => {
    try {
      // Check if the user is logged in
      const token = await storage.getItem("accessToken");
      if (token === null || token === undefined || token === "undefined") {
        return;
      }

      // If the user is logged in, check if the basket is empty
      // and merge the local basket with the server basket
      const state = getState() as RootState;
      const basket = state.basket as BasketState;

      // If the basket is empty, fetch the server basket
      // and set it in the state
      if (basket.items?.length === 0) {
        const result = await dispatch(
          basketApi.endpoints.getBasket.initiate(),
        ).unwrap();

        return dispatch(setBasket({ items: mapBasketState(result ?? []) }));
      }

      console.log("Basket is not empty, merging with server basket...");
      // If the basket is not empty, merge the local basket with the server basket
      const result = await dispatch(
        basketApi.endpoints.mergeBasket.initiate(basket.items),
      ).unwrap();

      return dispatch(setBasket({ items: mapBasketState(result ?? []) }));
    } catch (error) {
      console.error("Error merging basket:", error);
    }
  },
);

export const addToBasket = createAsyncThunk(
  "basket/addToBasket",
  // This function adds an item to the basket
  // It first checks if the user is logged in by checking for a token
  // If the user is logged in, it uses the API to add the item
  // If the user is not logged in, it updates the local state
  // If the item already exists in the basket, it updates the quantity
  // If the item does not exist in the basket, it adds the item to the basket
  async (
    { productId, price }: { productId: number; price: number },
    { dispatch, getState },
  ) => {
    try {
      const token = await storage.getItem("accessToken");
      const state = getState() as RootState;
      const items = state.basket.items;

      const existingItem = items.find((item) => item.productId === productId);

      // If the user is logged in, use the API to update or add the item
      if (token) {
        const result = await updateOrAddItem(
          productId, // Product Id
          !!existingItem, // Is item in basket
          existingItem ? existingItem.quantity + 1 : 1, // quantity
          existingItem ? existingItem.price : price, // price
          dispatch as AppDispatch,
        );

        // If the item already exists in the basket, update the quantity
        // If the item does not exist in the basket, add it to the basket
        let updatedItems = [...items];

        if (existingItem) {
          // If the item already exists, update the quantity
          updatedItems = items.map((item) =>
            item.productId === productId ? formatItem(result) : item,
          );
        } else {
          // If the item does not exist in the basket, add it to the basket
          updatedItems.push(formatItem(result));
        }

        dispatch(
          setBasket({
            items: updatedItems,
          }),
        );

        return result;
      }

      // If the user is not logged in, update the local state
      if (existingItem) {
        const updated = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };

        dispatch(
          setBasket({
            items: items.map((item) =>
              item.productId === productId ? updated : item,
            ),
          }),
        );
      } else {
        const newItem = { productId, quantity: 1, price };
        dispatch(setBasket({ items: [...items, newItem] }));

        return newItem;
      }
    } catch (error) {
      console.error("Error adding item to basket:", error);
    }
  },
);

export const getBasketProductList = createAsyncThunk(
  "basket/getBasketProductList",
  // This function fetches the product list from the server
  // It first checks if the user is logged in by checking for a token
  // If the user is logged in, it fetches the product list from the server
  // If the user is not logged in, it does nothing
  // It then dispatches the setProductList action with the fetched data
  async (_, { dispatch, getState }) => {
    let productIds;
    try {
      const token = await storage.getItem("accessToken");

      // if user is not logged in set the local basket items Id's into query
      // to fetch products
      if (token === null || token === undefined || token === "undefined") {
        const state = getState() as RootState;
        productIds = state.basket.items.map((item) => item.productId).join();
      }
    } catch (error) {
      console.error("Error get token from the store", error);
    }

    try {
      // fetch products for the product list in the basket
      const result = await dispatch(
        basketApi.endpoints.getBasketProductList.initiate(productIds),
      ).unwrap();

      // If the product list is not empty, set it in the state
      // If the product list is empty, do nothing
      if (result) {
        dispatch(setProductList({ productList: result }));
      }
    } catch (error) {
      console.error("Error fetching product list:", error);
    }
  },
);
