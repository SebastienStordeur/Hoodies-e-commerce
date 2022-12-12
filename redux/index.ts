import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/auth";
import cartSlice from "./cart/cart";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
