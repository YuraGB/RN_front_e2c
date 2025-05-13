import { useFormHook } from "@/hooks/useFormHook";
import { useAppSelector } from "@/store//hooks";
import { checkoutUserSchecma, TCheckoutUser } from "../validators";
import {
  setCheckoutStep,
  setCheckoutUser,
} from "@/store/checkout/checkoutSlice";

export const useCheckoutUser = () => {
  const user = useAppSelector((state) => state.auth.user);
  const currentStep = useAppSelector((state) => state.checkout.currentStep);

  const { setValue, errors, handleSubmit, status, setStatus } = useFormHook<
    TCheckoutUser,
    typeof checkoutUserSchecma
  >(checkoutUserSchecma, {
    email: user?.email || "",
  });

  const onSubmit = async (data: TCheckoutUser) => {
    setStatus("submitting");
    setCheckoutUser(data);
    setStatus("submitted");
    setCheckoutStep(currentStep + 1);
  };

  return {
    setValue,
    errors,
    onSubmitAction: handleSubmit(onSubmit),
    status,
  };
};
