import { CheckoutUser } from "./components/user/CheckoutUser";
import { DeliveryAddress } from "./components/deliveryAddress/DeliveryAddress";
import { PaymentMethods } from "./components/payment/PaymentMethods";
import { SubmitMultiForm } from "./components/SubmitMultiForm";
import { useCheckout } from "./hooks/useCheckout";
import { H3 } from "tamagui";

export const CheckoutMultiform = () => {
  const { currentStep, FIRST_STEP, FOURTH_STEP, SECOND_STEP, THIRD_STEP } =
    useCheckout();

  return (
    <>
      <H3>Checkout</H3>
      <CheckoutUser
        step={FIRST_STEP}
        isCurrentStep={FIRST_STEP === currentStep}
      />
      <DeliveryAddress
        step={SECOND_STEP}
        isCurrentStep={SECOND_STEP === currentStep}
      />
      <PaymentMethods
        step={THIRD_STEP}
        isCurrentStep={THIRD_STEP === currentStep}
      />
      <SubmitMultiForm
        step={FOURTH_STEP}
        isCurrentStep={FOURTH_STEP === currentStep}
      />
    </>
  );
};
