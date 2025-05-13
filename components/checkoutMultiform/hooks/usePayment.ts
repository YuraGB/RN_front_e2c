import { useFormHook } from "@/hooks/useFormHook";
import { useAppSelector } from "@/store/hooks";
import { paymentMethodSchema, TPayment } from "../validators";
import {
  setCheckoutStep,
  setPaymentMethod,
} from "@/store/checkout/checkoutSlice";

export const usePayment = () => {
  const currentStep = useAppSelector((state) => state.checkout.currentStep);

  const { setValue, errors, handleSubmit, status, setStatus } = useFormHook<
    TPayment,
    typeof paymentMethodSchema
  >(paymentMethodSchema);

  const onSubmit = async (data: TPayment) => {
    // loader
    setStatus("submitting");
    //set data to the state
    setPaymentMethod(data);
    // turn off loader
    setStatus("submitted");
    // next step
    setCheckoutStep(currentStep + 1);
  };

  return {
    setValue,
    errors,
    onSubmitAction: handleSubmit(onSubmit),
    status,
  };
};
