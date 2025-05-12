// config/constants.ts
import Constants from "expo-constants";
import { Platform } from "react-native";

export const BACKEND_BASE_URL =
  Platform.OS === "android"
    ? Constants.expoConfig?.extra?.MY_API_ADDRESS || "http://192.168.0.100:8080"
    : Constants.expoConfig?.extra?.BACKEND_URL || "http://localhost:8080";

export const API_URL = `${BACKEND_BASE_URL}/api`;

export const HP_PROD_SLIDER_QUERY = "limit=10&select=id,title,price,thumbnail";

export const CATEGORY_LIST_QUERY = "/category/list/";

export const CATEGORY_BY_NAME_QUERY = "/category?name=";

export const LOGIN_QUERY = "/auth/login/";

export const REGISTER_QUERY = "/auth/register/";
