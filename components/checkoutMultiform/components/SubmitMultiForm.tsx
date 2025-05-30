import { Loader } from "@/components/Loader";
import { useSetOrder } from "@/hooks/orders/useSetOrder";
import { ReactNode } from "react";
import { Button } from "tamagui";

export const SubmitMultiForm = ({
  isCurrentStep,
}: {
  step: number;
  isCurrentStep: boolean;
}): ReactNode => {
  const { isLoading, setOrderAction } = useSetOrder();
  if (!isCurrentStep) return null;

  return (
    <Button onPress={setOrderAction} disabled={isLoading}>
      {isLoading ? <Loader /> : "Place Order"}
    </Button>
  );
};
