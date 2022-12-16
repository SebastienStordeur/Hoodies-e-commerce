import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Cart {
  items: {
    id: string;
    title: string;
    price: string;
    totalPrice: number;
    quantity: number;
  }[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: Cart = {
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
      console.log(newItem);
      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.price * newItem.quantity,
        });
      } else {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice += newItem.price * newItem.quantity;
      }
    },
    removeItemFromCart(state, action: PayloadAction<any>) {
      const id = action.payload;
      const existingItem: any = state.items.find(
        (item: { id: any }) => item.id === id
      );
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item: { id: any }) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    resetCart(state) {
      return (state = initialState);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
