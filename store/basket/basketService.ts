import { AppDispatch } from "@/store/index";
import basketApi from "./basketApi";

// basketService.ts
export const updateOrAddItem = async (
  productId: number,
  exists: boolean,
  quantity: number,
  price: number,
  dispatch: AppDispatch,
) => {
  const action = exists
    ? basketApi.endpoints.updateItemInBasket.initiate({
        productId,
        quantity,
        price,
      })
    : basketApi.endpoints.addItemToBasket.initiate({
        productId,
        quantity,
        price,
      });

  const result = await dispatch(action).unwrap();

  return result;
};
