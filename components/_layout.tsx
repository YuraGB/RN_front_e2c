import { Tabs } from "expo-router";
import { useAppSelector } from "@/store/hooks";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";

export default function LayoutTabs() {
  const isUser = useAppSelector((state) => state.auth.isAuthenticated);

  return (
    <Tabs
      screenOptions={{
        animation: "shift", // Replace with a valid TabAnimationName or remove this line if unnecessary
        tabBarActiveTintColor: "#e91e63",
        tabBarInactiveTintColor: "#000",
        tabBarLabelStyle: {
          fontSize: 12,
          lineHeight: 12,
        },
        tabBarItemStyle: { height: 70 },
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: "absolute",
          bottom: 30,
          left: 10,
          right: 10,
          elevation: 0,
          backgroundColor: "#fff",
          borderTopColor: "#eee",
          borderTopWidth: 1,
          height: 60,
          borderRadius: 20,
          marginLeft: 20,
          marginRight: 20,
          padding: 0,
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign
              name='home'
              color={color}
              size={size}
              iconStyle='solid'
            />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: "Profile",
          headerShown: false,
          href: isUser ? "/profile" : null,
          tabBarItemStyle: { height: 70 },

          tabBarIcon: ({ color, size }) => (
            <AntDesign
              name='user'
              color={color}
              size={size}
              iconStyle='solid'
            />
          ),
        }}
      />
      <Tabs.Screen
        name='login'
        options={{
          title: "Login",
          headerShown: false,
          href: !isUser ? "/login" : null,
          tabBarItemStyle: { height: 70 },
          tabBarIcon: ({ color, size }) => (
            <AntDesign
              name='login'
              color={color}
              size={size}
              iconStyle='solid'
            />
          ),
        }}
      />
      <Tabs.Screen
        name='registration'
        options={{
          title: "Registration",
          headerShown: false,
          href: !isUser ? "/registration" : null,
          tabBarItemStyle: { height: 70 },
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6
              name='registered'
              color={color}
              size={size}
              iconStyle='solid'
            />
          ),
        }}
      />
      <Tabs.Screen
        name='category/[name]'
        options={{
          headerShown: false,
          href: null,
        }}
      />
    </Tabs>
  );
}
