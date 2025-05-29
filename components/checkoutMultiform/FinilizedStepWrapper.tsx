import { ReactNode } from "react";
import { Separator, View, XGroup } from "tamagui";

export const FinilizedStepWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <View padding={"$4"} justifyContent="space-between" alignItems="center">
      <XGroup width={"100%"} justifyContent="space-between" alignItems="center">
        {children}
      </XGroup>
      <Separator margin={"$4"} />
    </View>
  );
};
