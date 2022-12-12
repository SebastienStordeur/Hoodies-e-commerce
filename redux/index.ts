import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/auth";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;