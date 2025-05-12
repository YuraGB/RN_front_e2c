// app/profile.tsx

import { Text } from "react-native";
import PrivateRoute from "@/components/PrivatRoutes";
import ScrollViewComponentBase from "@/components/ScrollViewComponent";

export default function ProfileScreen() {
  return (
    <PrivateRoute>
      <ScrollViewComponentBase>
        <Text>Welcome, User!</Text>
      </ScrollViewComponentBase>
    </PrivateRoute>
  );
}
