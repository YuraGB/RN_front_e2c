import { useAppSelector } from "@/store/hooks";
import { TItem } from "@/types/basket";
import { ReactNode, useMemo } from "react";
import { Text, XGroup, YGroup } from "tamagui";

export const BasketSummary = ({
  children,
  basketItems = 0,
}: {
  children?: ReactNode;
  basketItems?: number;
}): ReactNode => {
  const productList = useAppSelector((state) => state.basket.productList);
  const productPrices = useMemo(
    () =>
      productList?.map((item) => ({
        id: item.id,
        price: item.price,
      })) ?? [],
    [productList],
  );

  const basketCounter = useAppSelector((state) => state.basket.items);

  const total = useMemo(
    () =>
      basketCounter.reduce((acc: number, curr: TItem) => {
        const product = productPrices?.find(
          (item) => item.id === curr.productId,
        );
        if (product) {
          return acc + product.price * curr.quantity;
        }
        return acc;
      }, 0),
    [basketCounter, productPrices],
  );

  if (!basketItems) {
    return null;
  }

  return (
    <YGroup>
      <XGroup justifyContent="space-between" padding={10}>
        <Text>Items in basket: {basketItems}</Text>
        <Text fontWeight={"bold"}>Total: {total.toFixed(2)}</Text>
      </XGroup>

      {children}
    </YGroup>
  );
};
