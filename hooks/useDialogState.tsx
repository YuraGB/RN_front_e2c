import { useState } from "react";

export const useDialogState = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const onPressAction = () => {
    setVisible((st) => !st);
  };

  const onCloseAction = () => {
    setVisible(false);
  };

  return {
    visible,
    onCloseAction,
    onPressAction,
  };
};
