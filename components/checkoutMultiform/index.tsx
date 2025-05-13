import { CheckoutUser } from "./components/CheckoutUser";
import { DeliveryAddress } from "./components/DeliveryAddress";
import { PaymentMethods } from "./components/PaymentMethods";
import { SubmitMultiForm } from "./components/SubmitMultiForm";
import { useCheckout } from "./hooks/useCheckout";

export const CheckoutMultiform = () => {
  const { currentStep, FIRST_STEP, FOURTH_STEP, SECOND_STEP, THIRD_STEP } =
    useCheckout();

  return (
    <>
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
