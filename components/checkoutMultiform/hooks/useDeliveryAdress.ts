import { useFormHook } from "@/hooks/useFormHook";
import { useAppDispatch, useAppSelector } from "@/store//hooks";
import { deliveryAdressSchecma, TDeliveryAddress } from "../validators";
import {
  setCheckoutStep,
  setDeliveryAdress,
} from "@/store/checkout/checkoutSlice";

export const useDeliveryAddress = (isCurrentStep: boolean) => {
  const currentStep = useAppSelector((state) => state.checkout.currentStep);
  const delAddress = useAppSelector((state) => state.checkout.deliveryAddress);

  const dispatch = useAppDispatch();

  const { setValue, errors, handleSubmit, status, setStatus, control } =
    useFormHook<TDeliveryAddress, typeof deliveryAdressSchecma>(
      deliveryAdressSchecma,
      {
        address: delAddress?.address ?? "",
        city: delAddress?.city ?? "",
        zipCode: delAddress?.zipCode ?? "",
      },
    );

  const onSubmit = async (data: TDeliveryAddress) => {
    // loader
    setStatus("submitting");
    //set data to the state
    dispatch(setDeliveryAdress(data));
    // turn off loader
    setStatus("submitted");
    // next step
    dispatch(setCheckoutStep(currentStep + 1));
  };

  // useEffect(() => {
  //   if (delAddress) {
  //     reset(delAddress);
  //   }
  // }, [isCurrentStep, reset, delAddress]);

  return {
    setValue,
    errors,
    onSubmitAction: handleSubmit(onSubmit),
    status,
    control,
  };
};
