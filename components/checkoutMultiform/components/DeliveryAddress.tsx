import { ReactNode } from "react";
import { Button, Fieldset, Input, Label, View, YGroup } from "tamagui";
import { useDeliveryAddress } from "../hooks/useDeliveryAdress";

export const DeliveryAddress = ({
  isCurrentStep,
}: {
  step: number;
  isCurrentStep: boolean;
}): ReactNode => {
  const { onSubmitAction, setValue } = useDeliveryAddress();

  if (!isCurrentStep) {
    return null;
  }

  return (
    <View>
      <YGroup>
        <Fieldset>
          <Label>City</Label>
          <Input
            placeholder="City"
            onChangeText={(text) => setValue("city", text)}
          />
        </Fieldset>
        <Fieldset>
          <Label>Zip code</Label>
          <Input
            placeholder="zip"
            keyboardType="numeric"
            onChangeText={(text) => setValue("zipCode", Number(text))}
          />
        </Fieldset>
        <Fieldset>
          <Label>Address</Label>
          <Input
            placeholder="Street, house numb., flat..."
            onChangeText={(text) => setValue("address", text)}
          />
        </Fieldset>
        <Button onPress={onSubmitAction}>Confirm</Button>
      </YGroup>
    </View>
  );
};
