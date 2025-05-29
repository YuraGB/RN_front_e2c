import { TItem } from "@/types/basket";

interface IMapBasketItemState extends TItem {
  product_id?: number;
}

/**
 * Maps the state of the basket to a format suitable for the API
 * @param state - The state of the basket
 * @returns An array of items in the format required by the API
 */
export const mapBasketState = (state: IMapBasketItemState[]): TItem[] => {
  if (!state) {
    return [];
  }

  return state.map(formatItem);
};

/**
 * Formats a single item to the format required by the API
 * @param item - The item to format
 * @returns The formatted item
 */
export const formatItem = (item: IMapBasketItemState): TItem => ({
  productId: item.productId ?? item.product_id ?? 0,
  quantity: item.quantity ?? 1,
  price: item.price ?? 0,
});
