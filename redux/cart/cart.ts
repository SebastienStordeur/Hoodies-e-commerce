import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Item {
  items: {
    id: string;
    title: string;
    price: string;
    totalPrice: string;
    quantity: number;
  }[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: Item = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<any>) {
      const newItem: any = action.payload;
      const existingItem = state.items.find(
        (item: any) => item.id === newItem.id
      );
      state.totalQuantity++;

      if (existingItem) {
        state.items.push({ ...newItem });
      }
    },
    removeItemFromCart() {},
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
