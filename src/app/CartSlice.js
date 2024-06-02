import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartState: false,
  cartItem: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setAddItemToCart: (state, action) => {
      state.cartItem.push(action.payload)
    }
  },
});

export const selectCartState = (state) => state.cart.cartState;
export default CartSlice.reducer;
export const { setOpenCart, setCloseCart, setAddItemToCart } = CartSlice.actions;
