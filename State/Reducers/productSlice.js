import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    cartItems: [],
    totalPrice: 0,
    totalQuantity: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      const checkProductInCart = state.cartItems.find(
        (item) => item._id === product._id
      );

      if (checkProductInCart) {
        state.cartItems = state.cartItems.map((cartProduct) =>
          cartProduct._id === product._id
            ? { ...cartProduct, quantity: cartProduct.quantity + quantity }
            : cartProduct
        );
      } else {
        state.cartItems.push({ ...product, quantity });
      }

      state.totalPrice += product.productPrice * quantity;
      state.totalQuantity += quantity;
    },
    
    onRemove: (state, action) => {
      const foundProduct = state.cartItems.find(item => item._id === action.payload.product._id);
      const newCartItems = state.cartItems.filter(item => item._id !== action.payload.product._id);

      state.totalPrice -= foundProduct.productPrice * foundProduct.quantity;
      state.totalQuantity -= foundProduct.quantity;
      state.cartItems = newCartItems;
    },

    toggleCartItemQuantity: (state, action) => {
      const { id, value } = action.payload;
      const foundProduct = state.cartItems.find(item => item._id === id);
      const newCartItems = state.cartItems.filter(item => item._id !== id);

      if (value === 'inc') {
        foundProduct.quantity += 1;
        state.totalPrice += foundProduct.productPrice;
        state.totalQuantity += 1;
        state.cartItems = [...newCartItems, { ...foundProduct }];
      } else if (value === 'dec' && foundProduct.quantity > 1) {
        foundProduct.quantity -= 1;
        state.totalPrice -= foundProduct.productPrice;
        state.totalQuantity -= 1;
        state.cartItems = [...newCartItems, { ...foundProduct }];
      } else {
        // Handle unexpected values of 'value'
      }
    },

   
  },
});

export const { onRemove, toggleCartItemQuantity, addToCart} =
productSlice.actions;
export default productSlice.reducer;
