import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addToCart: (state, action) => {
      const { product } = action.payload;
      return {
        ...state,
        ...product,
        quantity: 1,
        totalPrice: product.price ?? 0,
      }; // Add totalPrice property to track total price
    },
    incrementQuantity: (state) => {
      state.quantity += 1;
      state.totalPrice = state.quantity * state.price; // Update the total price
    },
    decrementQuantity: (state) => {
      if (state.quantity > 1) {
        state.quantity -= 1;
        state.totalPrice = state.quantity * state.price; // Update the total price
      }
    },
    removeFromCart: (state) => null,
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
