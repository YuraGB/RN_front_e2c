import { getBasketProductList } from "@/store/basket/basketThunk";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { BasketItem } from "./BasketItem";
import { Loader } from "../Loader";

export const BasketItemList = () => {
  const basketItems = useAppSelector((state) => state.basket.productList);
  const isBasketEmpty = !useAppSelector((state) => state.basket.items.length);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch the basket product list when the component mounts
  // and when the basketItems state changes
  useEffect(() => {
    console.log(isBasketEmpty);
    if (!basketItems?.length && !isBasketEmpty) {
      setLoading(true);
      dispatch(getBasketProductList())
        .unwrap()
        .finally(() => setLoading(false));
    }
  }, [basketItems, dispatch, loading, isBasketEmpty]);

  if (loading) {
    return <Loader />;
  }

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
