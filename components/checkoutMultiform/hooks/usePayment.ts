import { useFormHook } from "@/hooks/useFormHook";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { paymentMethodSchema, TPayment } from "../validators";
import {
  setCheckoutStep,
  setPaymentMethod,
} from "@/store/checkout/checkoutSlice";

export const usePayment = () => {
  const currentStep = useAppSelector((state) => state.checkout.currentStep);
  const dispatch = useAppDispatch();

  const { setValue, errors, handleSubmit, status, setStatus } = useFormHook<
    TPayment,
    typeof paymentMethodSchema
  >(paymentMethodSchema);

  const onSubmit = async (data: TPayment) => {
    console.log("Payment data", data);
    // loader
    setStatus("submitting");
    //set data to the state
    dispatch(setPaymentMethod(data));
    // turn off loader
    setStatus("submitted");
    // next step
    dispatch(setCheckoutStep(currentStep + 1));
  };

  return {
    setValue,
    errors,
    onSubmitAction: handleSubmit(onSubmit),
    status,
  };
};
