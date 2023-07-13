import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

export const cartSlide = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      const checkIfProduct = state.carts.find(
        (item) => item.productId == action.payload.productId
      );
      if (checkIfProduct) {
        const newOrder = {
          productId: action.payload.productId,
          count: checkIfProduct.count + action.payload.count,
        };

        console.log(newOrder);
        const newCart = state.carts.filter(
          (item) => item.productId != action.payload.productId
        );
        newCart.push(newOrder);
        state.carts = [...newCart];
      } else {
        const cartItem = action.payload;
        state.carts.push(cartItem);
      }
    },
  },
});

export const { addToCard } = cartSlide.actions;
export default cartSlide.reducer;
