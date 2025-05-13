import { useAppSelector } from "@/store/hooks";
import { useStep } from "./useStep";

export const useCheckout = () => {
  const currentStep = useAppSelector((state) => state.checkout.currentStep);
  const steps = useStep();

  return {
    currentStep,
    ...steps,
  };
};
