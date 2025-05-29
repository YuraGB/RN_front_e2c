import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { FontAwesome6 } from "@expo/vector-icons";
import { Button, Paragraph } from "tamagui";
import { FinilizedStepWrapper } from "../../FinilizedStepWrapper";
import { setCheckoutStep } from "@/store/checkout/checkoutSlice";

export const PaymentMethodsFinilized = ({ step }: { step: number }) => {
  const paymentMethod = useAppSelector((state) => state.checkout.paymentMethod);
  const dispatch = useAppDispatch();

  if (!paymentMethod) return null;

  const { method } = paymentMethod;
  return (
    <FinilizedStepWrapper>
      <Button
        icon={<FontAwesome6 name={"edit"} />}
        aria-label="edit user email"
        onPress={() => dispatch(setCheckoutStep(step))}
      />
      <Paragraph>{`Payment method: ${method}`}</Paragraph>
    </FinilizedStepWrapper>
  );
};
