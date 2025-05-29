import DialogInstance from "@/components/DialogComponent";
import { useBasket } from "./useBasket";
import { BasketButtonTrigger } from "@/components/basket/BasketTriggerButton";
import { BasketSummary } from "./BasketSummary";
import { Button } from "tamagui";
import { BasketItemList } from "./BasketItemsList";

export const Basket = () => {
  const {
    basketCounter,
    onPressHandler,
    onCloseAction,
    visible,
    goToCheckoutAction,
  } = useBasket();

  return (
    <DialogInstance
      dialogTitle={"Basket"}
      buttonTrigger={
        <BasketButtonTrigger
          triggerAction={onPressHandler}
          basketCounter={basketCounter}
        />
      }
      visible={visible}
      onClose={onCloseAction}
    >
      <BasketSummary basketItems={basketCounter}>
        <Button onPress={goToCheckoutAction}>Go to Checkout</Button>
      </BasketSummary>
      <BasketItemList />
    </DialogInstance>
  );
};
