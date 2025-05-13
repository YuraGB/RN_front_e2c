import { FontAwesome5 } from "@expo/vector-icons";
import { ReactNode } from "react";
import { Text } from "react-native";
import { Button } from "tamagui";

export const SearchButtonTrigger = ({
  triggerAction,
}: {
  triggerAction: () => void;
}): ReactNode => {
  return (
    <Button
      icon={<FontAwesome5 name={"search"} />}
      aria-label="Search"
      onPress={triggerAction}
    >
      <Text className="hidden">Seach</Text>
    </Button>
  );
};
