import { ReactNode } from "react";
import { View } from "react-native";
import {
  Button,
  Fieldset,
  H4,
  Input,
  Label,
  Paragraph,
  Separator,
  YGroup,
} from "tamagui";
import { useCheckoutUser } from "@/components/checkoutMultiform/hooks/useCheckoutUser";
import { CheckoutUserFinish } from "./CheckoutUserFinish";
import { Controller } from "react-hook-form";

export const CheckoutUser = ({
  isCurrentStep,
  step,
}: {
  step: number;
  isCurrentStep: boolean;
}): ReactNode => {
  const { onSubmitAction, control } = useCheckoutUser();

  if (!isCurrentStep) {
    return <CheckoutUserFinish step={step} />;
  }

  return (
    <View>
      <YGroup>
        <H4>User e-mail</H4>
        <Controller
          control={control}
          name="email"
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <Fieldset>
              <Label color={error?.message ? "red" : ""}>E-mail</Label>
              <Input
                placeholder="User's email"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
              {error?.message ? (
                <Paragraph color={"red"}>{error.message}</Paragraph>
              ) : null}
            </Fieldset>
          )}
        />

        <Separator marginBlock={15} />

        <Button onPress={onSubmitAction} aria-label="Submit user email">
          Confirm
        </Button>
      </YGroup>
    </View>
  );
};
