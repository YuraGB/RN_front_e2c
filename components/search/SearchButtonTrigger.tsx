import { FontAwesome5 } from "@expo/vector-icons";
import { ReactNode } from "react";
import { Text } from "react-native";
import { Button } from "tamagui";
import { RoundedButton } from "../RoundedButton";

export const SearchButtonTrigger = ({
  triggerAction,
}: {
  triggerAction: () => void;
}): ReactNode => {
  return (
    <RoundedButton
      icon={<FontAwesome5 name={"search"} className={"mr-[5px] absolute"} />}
      onPress={triggerAction}
      ariaLabel="Search"
    >
      <Text className="hidden">Seach</Text>
    </RoundedButton>
  );
};
