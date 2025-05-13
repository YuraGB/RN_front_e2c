import { ReactNode } from "react";
import { View } from "react-native";
import { Button, Fieldset, Input, Label, YGroup } from "tamagui";
import { useCheckoutUser } from "@/components/checkoutMultiform/hooks/useCheckoutUser";

export const CheckoutUser = ({
  isCurrentStep,
}: {
  step: number;
  isCurrentStep: boolean;
}): ReactNode => {
  const { onSubmitAction, errors, setValue } = useCheckoutUser();
  console.log(errors);

  if (!isCurrentStep) {
    return null;
  }

  return (
    <View>
      <YGroup>
        <Fieldset>
          <Label>E-mail</Label>
          <Input
            placeholder="User's email"
            onChangeText={(text) => setValue("email", text)}
          />
        </Fieldset>
        <Button onPress={onSubmitAction} aria-label="Submit user email">
          Confirm
        </Button>
      </YGroup>
    </View>
  );
};
