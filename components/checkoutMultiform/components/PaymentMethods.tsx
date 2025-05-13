import { ReactNode } from "react";
import { Button, Label, RadioGroup, SizeTokens, XStack, YStack } from "tamagui";
import { usePayment } from "@/components/checkoutMultiform/hooks/usePayment";
import { TPayment } from "../validators";

export const PaymentMethods = ({
  isCurrentStep,
}: {
  step: number;
  isCurrentStep: boolean;
}): ReactNode => {
  const { onSubmitAction, setValue } = usePayment();
  const pressAction = (value: TPayment["method"]) => setValue("method", value);

  if (!isCurrentStep) {
    return null;
  }

  return (
    <RadioGroup aria-labelledby="Select one item" defaultValue="3" name="form">
      <YStack width={300} alignItems="center" space="$2">
        <RadioGroupItemWithLabel
          size="$3"
          value="cash"
          label="Cash"
          pressAction={pressAction}
        />
        <RadioGroupItemWithLabel
          size="$4"
          value="card"
          label="Card"
          pressAction={pressAction}
        />
      </YStack>
      <Button onPress={onSubmitAction}>Submit</Button>
    </RadioGroup>
  );
};

export function RadioGroupItemWithLabel(props: {
  size: SizeTokens;
  value: TPayment["method"];
  label: string;
  pressAction: (value: TPayment["method"]) => void;
}) {
  const id = `radiogroup-${props.value}`;
  return (
    <XStack width={300} alignItems="center" margin="$4">
      <RadioGroup.Item
        value={props.value}
        id={id}
        size={props.size}
        onPress={() => props.pressAction(props.value)}
      >
        <RadioGroup.Indicator />
      </RadioGroup.Item>

      <Label size={props.size} htmlFor={id}>
        {props.label}
      </Label>
    </XStack>
  );
}
