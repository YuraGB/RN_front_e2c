import { addToBasket } from "@/store/basket/basketThunk";
import { useAppDispatch } from "@/store/hooks";
import { GestureResponderEvent } from "react-native";

export const useAddToCard = (productId: number, price: number) => {
  const dispatch = useAppDispatch();

  /**
   * Function to handle adding an item to the basket
   * @param e - event onPress
   */
  const handleAddToBasket = async (e: GestureResponderEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      // Dispatch the AsyntThunk to add the item to the basket
      await dispatch(addToBasket({ productId, price }));
    } catch (error) {
      console.error("Помилка при додаванні до кошика", error);
    }
  };

  return {
    handleAddToBasket,
  };
};
