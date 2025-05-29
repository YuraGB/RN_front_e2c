import { TProduct } from "@/types/product";

export type TAddItemBasket = {
  quantity: number;
  productId: number;
  price: number;
};

export interface TItem {
  quantity: number;
  price: number;
  productId: number;
}

export type TProductBasket = Pick<
  TProduct,
  "id" | "title" | "thumbnail" | "price"
>;

export interface BasketState {
  items: TItem[];
  productList?: TProductBasket[];
}
