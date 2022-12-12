import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart() {},
    removeItemFromCart() {},
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
