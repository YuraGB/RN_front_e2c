import { ReactNode } from "react";
import { Spinner, YStack } from "tamagui";

export const Loader = (): ReactNode => {
  return (
    <YStack padding="$3" alignItems="center">
      <Spinner size="large" color="red" />
    </YStack>
  );
};
