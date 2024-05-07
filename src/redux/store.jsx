import { configureStore } from "@reduxjs/toolkit";
import { CardSlice } from "../redux/slice/CardSlice";

export const store = configureStore({
  reducer: {
    cart: CardSlice,
  },
});
