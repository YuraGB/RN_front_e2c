// store/authThunks.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { router } from "expo-router";
import { API_URL } from "@/config/constants";
import { storage } from "@/utils/getPlatform";
import { User } from "@/types/user";

export const logoutThunk = createAsyncThunk(
  "auth/logoutThunk",
  async (_, thunkAPI) => {
    await storage.deleteItem("accessToken");
    await thunkAPI.dispatch({ type: "auth/logout" });
    await thunkAPI.dispatch({ type: "basket/clearBasket" });
    router.replace("/login");
  },
);

export const checkAuthThunk = createAsyncThunk(
  "auth/checkAuthThunk",
  async (_, { dispatch }) => {
    try {
      const token = await storage.getItem("accessToken");

      if (token === null || token === undefined || token === "undefined") {
        return;
      }

      const res = await fetch(`${API_URL}/users/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data: User = await res.json();

      if (res.ok) {
        dispatch({
          payload: data,
          type: "auth/setUser",
        });

        dispatch({
          payload: true,
          type: "auth/setIsAuthenticated",
        });
      } else {
        await storage.deleteItem("accessToken");
      }
    } catch (err) {
      console.error("Auth check failed", err);
    }
  },
);
