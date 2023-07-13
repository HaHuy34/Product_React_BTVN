import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product";
import cartReducer from "./card";

export const store = configureStore({
  reducer: {
    products: productReducer,
    carts: cartReducer,
  },
});
