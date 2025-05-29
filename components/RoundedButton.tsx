import { ReactNode } from "react";
import { Button } from "tamagui";

interface IRoundedButton {
  icon: React.ReactNode;
  children: React.ReactNode;
  onPress: () => void;
  ariaLabel: string;
  iconAfter?: React.ReactNode;
}

export const RoundedButton = ({
  icon,
  children,
  onPress,
  ariaLabel,
  ...props
}: IRoundedButton): ReactNode => {
  return (
    <Button
      icon={icon}
      aria-label={ariaLabel}
      onPress={onPress}
      borderRadius={"50%"}
      aspectRatio={1}
      {...props}
    >
      {children}
    </Button>
  );
};
