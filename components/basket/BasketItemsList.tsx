import { getBasketProductList } from "@/store/basket/basketThunk";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";
import { BasketItem } from "./BasketItem";

export const BasketItemList = () => {
  const basketItems = useAppSelector((state) => state.basket.productList);
  const dispatch = useAppDispatch();

  // Fetch the basket product list when the component mounts
  // and when the basketItems state changes
  useEffect(() => {
    if (!basketItems?.length) {
      dispatch(getBasketProductList());
    }
  }, [basketItems, dispatch]);

  if (!basketItems?.length) {
    return null;
  }

  return (
    <FlatList
      data={basketItems}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <BasketItem item={item} />}
      showsVerticalScrollIndicator={true}
    />
  );
};
