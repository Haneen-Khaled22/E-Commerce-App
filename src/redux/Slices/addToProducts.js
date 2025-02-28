import { createSlice } from "@reduxjs/toolkit";



const newProduct = createSlice({
    name:"new",
  
        initialState: {
            products: [],
            totalQuantity: 0, 
            totalPrice: 0, 
          },

          reducers:{
           addToProducts: (state, action) => {
                 const existingProduct = state.products.find(
                   (product) => product.id === action.payload.id
                 );
           
                 if (existingProduct) {
                   existingProduct.quantity += 1;
                 } else {
                   state.products.push({ ...action.payload, quantity: 1 });
                 }
           
                 state.totalQuantity += 1;
                 state.totalPrice += action.payload.price;
               },

               addNewProduct: (state, action) => {
                // ✅ Ensure a new product is added without affecting existing ones
                state.products.push({
                    id: action.payload.id || Date.now(),
                    name: action.payload.name,
                    quantity: action.payload.quantity || 1, // Default to 1 if not provided
                    price: action.payload.price,
                    imgURL: action.payload.imgURL
                });

                state.totalQuantity += action.payload.quantity || 1;
                state.totalPrice += action.payload.price * (action.payload.quantity || 1);
            }

          }
    
});

export const {addToProducts,addNewProduct} = newProduct.actions;
export default newProduct.reducer;