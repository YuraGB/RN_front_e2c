import { checkAuthThunk } from "@/store/auth/authThunks";
import { useAppDispatch } from "@/store/hooks";
import { Stack } from "expo-router";
import { useEffect } from "react";

export const BasicLayout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthThunk());
  }, [dispatch]);

  return (
    <Stack
      screenOptions={{
        animation: "flip",
        headerStyle: {
          backgroundColor: "#e91e63",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
        headerShadowVisible: true,
        headerTitleAlign: "center",
        headerBackTitle: "Back",
        statusBarAnimation: "fade",
        animationTypeForReplace: "push",
        contentStyle: {
          backgroundColor: "#fff",
        },
        fullScreenGestureShadowEnabled: true,
        fullScreenGestureEnabled: true,
        statusBarHidden: false,
        statusBarStyle: "auto",
      }}
    >
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(withTabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="product/[id]"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="category/[name]"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};
export default BasicLayout;
