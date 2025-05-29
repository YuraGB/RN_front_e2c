import { ReactNode } from "react";
import {
  Button,
  H4,
  Label,
  RadioGroup,
  SizeTokens,
  XStack,
  YStack,
} from "tamagui";
import { usePayment } from "@/components/checkoutMultiform/hooks/usePayment";
import { TPayment } from "../../validators";
import { PaymentMethodsFinilized } from "./PaymentMethodFinilized";

export const PaymentMethods = ({
  step,
  isCurrentStep,
}: {
  step: number;
  isCurrentStep: boolean;
}): ReactNode => {
  const { onSubmitAction, setValue } = usePayment();
  const pressAction = (value: TPayment["method"]) => {
    console.log("Payment method selected:", value);

    setValue("method", value);
  };

  if (!isCurrentStep) {
    return <PaymentMethodsFinilized step={step} />;
  }

  return (
    <RadioGroup aria-labelledby="Select one item" defaultValue="3" name="form">
      <YStack width={300} alignItems="center" margin="$2">
        <H4>Payment method</H4>
        <RadioGroupItemWithLabel
          size="$5"
          value="cash"
          label="Cash"
          pressAction={pressAction}
        />
        <RadioGroupItemWithLabel
          size="$5"
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

      <Label size={props.size} htmlFor={id} marginLeft={20}>
        {props.label}
      </Label>
    </XStack>
  );
}
