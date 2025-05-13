import {
  TCheckoutUser,
  TDeliveryAddress,
  TPayment,
} from "@/components/checkoutMultiform/validators";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TInitState {
  currentUser: TCheckoutUser | null;
  deliveryAddress: TDeliveryAddress | null;
  paymentMethod: TPayment | null;
  currentStep: number;
}

const initialState: TInitState = {
  currentUser: null,
  deliveryAddress: null,
  paymentMethod: null,
  currentStep: 1,
};

export const checkoutSlice = createSlice({
  initialState,
  name: "checkoutState",
  reducers: {
    setDeliveryAdress: (state, action: PayloadAction<TDeliveryAddress>) => {
      state.deliveryAddress = action.payload;
    },
    setCheckoutUser: (state, action: PayloadAction<TCheckoutUser>) => {
      state.currentUser = action.payload;
    },
    setPaymentMethod: (state, action: PayloadAction<TPayment>) => {
      state.paymentMethod = action.payload;
    },
    clearCheckoutData: (state) => {
      state = {
        deliveryAddress: null,
        currentUser: null,
        paymentMethod: null,
        currentStep: 1,
      };
    },
    setCheckoutStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
  },
});

export const {
  clearCheckoutData,
  setCheckoutUser,
  setPaymentMethod,
  setDeliveryAdress,
  setCheckoutStep,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
