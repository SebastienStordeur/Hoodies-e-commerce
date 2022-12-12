import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthSliceState } from "../../types/types";

const initialState: AuthSliceState = {
  isAuthenticated: false,
  user: {
    id: null,
    fullName: null,
    cart: [],
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction) {},
    logout(state) {
      localStorage.removeItem("token");
      return (state = initialState);
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
