import { ReactNode } from "react";
import { Button } from "tamagui";

export const SubmitMultiForm = ({
  isCurrentStep,
}: {
  step: number;
  isCurrentStep: boolean;
}): ReactNode => {
  if (!isCurrentStep) return null;
  return <Button>Submit checkout</Button>;
};
