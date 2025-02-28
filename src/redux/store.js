import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./Slices/CartSlice";
import favReducer from './Slices/FavouriteSlice';
import ProductsSlice from './Slices/ProductsSlice';
import authReducer from './Slices/authSlice';
// import newProduct from './Slices/addToProducts';

const Store = configureStore({

    reducer:{
        cart:cartReducer,
        fav:favReducer,
        products:ProductsSlice,
        auth:authReducer,
        
    }
});

export default Store;
