// app/profile.tsx

import { Text } from "react-native";
import PrivateRoute from "@/components/PrivatRoutes";
import ScrollViewComponentBase from "@/components/ScrollViewComponent";
import { Button } from "tamagui";
import { useAppDispatch } from "@/store/hooks";
import { logoutThunk } from "@/store/auth/authThunks";

export default function ProfileScreen() {
  const dispatch = useAppDispatch();
  return (
    <PrivateRoute>
      <ScrollViewComponentBase>
        <Text>Welcome, User!</Text>
        <Button onPress={() => dispatch(logoutThunk())}>Logout</Button>
      </ScrollViewComponentBase>
    </PrivateRoute>
  );
}
