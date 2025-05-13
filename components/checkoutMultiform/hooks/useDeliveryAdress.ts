import { useFormHook } from "@/hooks/useFormHook";
import { useAppSelector } from "@/store//hooks";
import { deliveryAdressSchecma, TDeliveryAddress } from "../validators";
import {
  setCheckoutStep,
  setDeliveryAdress,
} from "@/store/checkout/checkoutSlice";

export const useDeliveryAddress = () => {
  const currentStep = useAppSelector((state) => state.checkout.currentStep);

  const { setValue, errors, handleSubmit, status, setStatus } = useFormHook<
    TDeliveryAddress,
    typeof deliveryAdressSchecma
  >(deliveryAdressSchecma);

  const onSubmit = async (data: TDeliveryAddress) => {
    // loader
    setStatus("submitting");
    //set data to the state
    setDeliveryAdress(data);
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
