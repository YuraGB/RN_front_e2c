import { useDialogState } from "@/hooks/useDialogState";
import { useAppSelector } from "@/store/hooks";
import { useRouter } from "expo-router";

export const useBasket = () => {
  const basketCounter = useAppSelector((state) => state.basket.items.length);
  const { onCloseAction, onPressAction, visible } = useDialogState();
  const router = useRouter();
  const onPressHandler = () => {
    onPressAction();
  };

  const goToCheckoutAction = () => {
    onCloseAction();
    router.push("/checkout");
  };
  return {
    basketCounter,
    onCloseAction,
    visible,
    onPressHandler,
    goToCheckoutAction,
  };
};
