import { setCheckoutStep } from "@/store/checkout/checkoutSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { FontAwesome6 } from "@expo/vector-icons";
import { Button, Paragraph } from "tamagui";
import { FinilizedStepWrapper } from "../../FinilizedStepWrapper";

export const CheckoutUserFinish = ({ step }: { step: number }) => {
  const user = useAppSelector((state) => state.checkout.currentUser);
  const dispatch = useAppDispatch();

  if (!user) return null;

  return (
    <FinilizedStepWrapper>
      <Button
        icon={<FontAwesome6 name={"edit"} />}
        aria-label="edit user email"
        onPress={() => dispatch(setCheckoutStep(step))}
      />
      <Paragraph>{user.email}</Paragraph>
    </FinilizedStepWrapper>
  );
};
