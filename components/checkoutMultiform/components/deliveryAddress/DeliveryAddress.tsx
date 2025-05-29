import { ReactNode } from "react";
import {
  Button,
  Fieldset,
  H4,
  Input,
  Label,
  Paragraph,
  Separator,
  View,
  YGroup,
} from "tamagui";
import { useDeliveryAddress } from "../../hooks/useDeliveryAdress";
import { DeliveryAddressFinilized } from "./DeliveryAddressFinilized";
import { Controller } from "react-hook-form";

export const DeliveryAddress = ({
  step,
  isCurrentStep,
}: {
  step: number;
  isCurrentStep: boolean;
}): ReactNode => {
  const { onSubmitAction, errors, control } = useDeliveryAddress(isCurrentStep);

  if (!isCurrentStep) {
    return <DeliveryAddressFinilized step={step} />;
  }

  return (
    <View>
      <YGroup>
        <H4>Delivery address</H4>
        <Controller
          control={control}
          name="city"
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <Fieldset>
              <Label color={error ? "red" : ""}>City</Label>
              <Input
                placeholder="City"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
              {error && <Paragraph color={"red"}>{error.message}</Paragraph>}
            </Fieldset>
          )}
        />
        <Controller
          control={control}
          name="zipCode"
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <Fieldset>
              <Label color={errors?.zipCode ? "red" : ""}>Zip code</Label>
              <Input
                placeholder="Zip code"
                onBlur={onBlur}
                keyboardType="numeric"
                onChangeText={onChange}
                value={value}
              />
              {error?.message ? (
                <Paragraph color={"red"}>{error.message}</Paragraph>
              ) : null}
            </Fieldset>
          )}
        />
        <Controller
          control={control}
          name="address"
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <Fieldset>
              <Label color={errors?.address ? "red" : ""}>Address</Label>
              <Input
                placeholder="Street, house numb., flat..."
                onBlur={onBlur}
                onChangeText={onChange}
                value={String(value)}
              />
              {error?.message ? (
                <Paragraph color={"red"}>{error.message}</Paragraph>
              ) : null}
            </Fieldset>
          )}
        />

        <Separator marginBlock={15} />
        <Button onPress={onSubmitAction}>Confirm</Button>
      </YGroup>
    </View>
  );
};
