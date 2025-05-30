import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useCreateOrderMutation } from "@/store/order/orderApi";
import { TPAymentType } from "@/types/order";
import { useEffect } from "react";

export const useSetOrder = () => {
  // This hook is currently a placeholder and does not implement any functionality.
  // It can be extended in the future to handle order setting logic.
  const dispatch = useAppDispatch();
  const checkoutData = useAppSelector((state) => state.checkout);
  const userId = useAppSelector((state) => state.auth.user?.id);
  const basketItems = useAppSelector((state) => state.basket.productList);
  const basketCounter = useAppSelector((state) => state.basket.items);
  const [createOrder, { data, error, isLoading }] = useCreateOrderMutation();

  useEffect(() => {
    // This effect can be used to handle side effects related to order creation
    if (data) {
      console.log("Order created successfully:", data);
    }
    if (error) {
      console.error("Error creating order:", error);
    }
  }, [data, error]);

  //setOrder function to create an order
  // This function will be called to set the order based on the checkout data and basket items
  const setOrderAction = () => {
    // Logic to set the order will go here
    const { currentUser, deliveryAddress, paymentMethod } = checkoutData;

    // todo user can be anonymus
    // Ensure all required data is available before proceeding
    if (
      !currentUser ||
      !deliveryAddress ||
      !paymentMethod ||
      !userId ||
      !basketItems
    ) {
      console.error("Missing required checkout data");
      return;
    }

    // Create the order using the createOrder mutation
    createOrder({
      address: deliveryAddress.address,
      city: deliveryAddress.city,
      state: "deliveryAddress.state",
      zip: deliveryAddress.zipCode,
      paymentType: paymentMethod.method.toUpperCase() as TPAymentType,
      userId: userId,
      orderProducts: basketItems.map((item) => ({
        productId: item.id,
        quantity:
          basketCounter.find((counterItem) => counterItem.productId === item.id)
            ?.quantity || 1, // Default to 1 if quantity is not found
        price: item.price,
      })),
    });
  };

  return {
    setOrderAction,
    isLoading,
  };
};
