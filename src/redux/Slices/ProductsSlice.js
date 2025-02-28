
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from './../../utils/axiosInstance';

export const fetchAllProducts = createAsyncThunk("products/getAll",async(_,thunkApi)=>{

    try{
        const response = await axiosInstance.get("/products");
            // await new Promise((resolve)=>setTimeout(resolve,3000));
            // throw new Error("error from thunk");
            return response.data;

    }catch(error){
        return thunkApi.rejectWithValue("Error from thunk");
        
    }
    
});


const ProductsSlice = createSlice({
    name:"products",
    initialState:{
        products:[],
        isLoading:false,
        error:false
    },
   
    extraReducers:(builder)=>{
        builder.addCase(fetchAllProducts.pending,(state)=>{
            state.isLoading=true,
            state.error=false
        }).addCase(fetchAllProducts.fulfilled,(state,action)=>{
            state.products=action.payload;
            state.isLoading=false,
            state.error=false
        }).addCase(fetchAllProducts.rejected,(state,action)=>{
            state.error=action.payload,
            state.isLoading=false
        });
        
    }
  


});

export default ProductsSlice.reducer;

       