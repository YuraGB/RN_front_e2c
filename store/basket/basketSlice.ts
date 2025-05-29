import { BasketState, TItem } from "@/types/basket";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: BasketState = {
  items: [],
  productList: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setBasket: (state, action: PayloadAction<{ items: TItem[] }>) => {
      state.items = action.payload.items;
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.productId === action.payload.id,
      );
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    clearBasket: (state) => {
      state.items = [];
      state.productList = [];
    },
    setProductList: (state, action: PayloadAction<{ productList: any[] }>) => {
      state.productList = action.payload.productList;
    },
    clearProductList: (state) => {
      state.productList = [];
    },
  },
});

export const { addItem, removeItem, clearBasket, setBasket, setProductList } =
  basketSlice.actions;
export default basketSlice.reducer;
