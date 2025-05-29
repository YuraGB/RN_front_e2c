import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { FontAwesome6 } from "@expo/vector-icons";
import { Button, Paragraph, View, YGroup } from "tamagui";
import { FinilizedStepWrapper } from "../../FinilizedStepWrapper";
import { setCheckoutStep } from "@/store/checkout/checkoutSlice";

export const DeliveryAddressFinilized = ({ step }: { step: number }) => {
  const addressData = useAppSelector((state) => state.checkout.deliveryAddress);
  const dispatch = useAppDispatch();

  if (!addressData) return null;

  const { address, city, zipCode } = addressData;
  return (
    <FinilizedStepWrapper>
      <Button
        icon={<FontAwesome6 name={"edit"} />}
        aria-label="edit user email"
        onPress={() => dispatch(setCheckoutStep(step))}
      />
      <View>
        <YGroup>
          <Paragraph>{`City: ${city}`}</Paragraph>
          <Paragraph>{`Address: ${address}`}</Paragraph>
          <Paragraph>{`zip: ${zipCode}`}</Paragraph>
        </YGroup>
      </View>
    </FinilizedStepWrapper>
  );
};
