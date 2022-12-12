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

interface ILogin {
  token: string;
  expirationTime: string;
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<ILogin>) {
      const payload = action.payload;
      localStorage.setItem("token", payload.token);
      state.isAuthenticated = true;
      return state;
    },
    logout(state) {
      localStorage.removeItem("token");
      return (state = initialState);
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
