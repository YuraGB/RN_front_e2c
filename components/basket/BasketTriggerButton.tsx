import { FontAwesome } from "@expo/vector-icons";
import { ReactNode } from "react";
import { Text } from "react-native";
import { RoundedButton } from "@/components/RoundedButton";

export const BasketButtonTrigger = ({
  triggerAction,
  basketCounter,
}: {
  triggerAction: () => void;
  basketCounter?: number;
}): ReactNode => {
  return (
    <RoundedButton
      icon={
        <FontAwesome
          name="shopping-basket"
          size={20}
          color="black"
          className="absolute"
        />
      }
      onPress={triggerAction}
      ariaLabel="Basket"
      iconAfter={
        <Text className="absolute rounded-sm text-error top-0 right-0 font-bold">
          {basketCounter ? basketCounter : 0}
        </Text>
      }
    >
      <Text className="hidden">Basket</Text>
    </RoundedButton>
  );
};
