import { createSlice } from "@reduxjs/toolkit";


const storedCart = JSON.parse(localStorage.getItem("cart")) || {
  Products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: storedCart, 
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.Products.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.Products.push({ ...action.payload, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;

      localStorage.setItem("cart", JSON.stringify(state)); 
    },

    removeFromCart: (state, action) => {
      const removedProduct = state.Products.find(
        (product) => product.id === action.payload.id
      );

      if (removedProduct) {
        state.totalQuantity -= removedProduct.quantity;
        state.totalPrice -= removedProduct.price * removedProduct.quantity;
        state.Products = state.Products.filter(
          (product) => product.id !== action.payload.id
        );

        localStorage.setItem("cart", JSON.stringify(state)); 
      }
    },

    addQuantity: (state, action) => {
      const product = state.Products.find(
        (product) => product.id === action.payload.id
      );

      if (product) {
        product.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += product.price;

        localStorage.setItem("cart", JSON.stringify(state)); 
      }
    },

    decreaseQuantity: (state, action) => {
      const product = state.Products.find(
        (product) => product.id === action.payload.id
      );

      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
          state.totalQuantity -= 1;
          state.totalPrice -= product.price;
        } else {
          state.Products = state.Products.filter(
            (p) => p.id !== action.payload.id
          );
          state.totalQuantity -= 1;
          state.totalPrice -= product.price;
        }

        localStorage.setItem("cart", JSON.stringify(state)); 
      }
    },
  },
});

export const { addToCart, removeFromCart, addQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
