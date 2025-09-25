import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart-slice.ts";

export const clothStore = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof clothStore.getState>;
export type AppDispatch = typeof clothStore.dispatch;
