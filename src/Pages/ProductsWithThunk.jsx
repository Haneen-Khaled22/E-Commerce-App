import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../redux/Slices/ProductsSlice';
import { Spinner } from 'react-bootstrap';
import ProductCard from './ProductCard';

function ProductsWithThunk() {

    const {products,isLoading,error} = useSelector((state)=>state.products);
    const dispatch =useDispatch();

    useEffect(()=>{
        dispatch(fetchAllProducts());
    },[])
    
    console.log(products);

    return (
        <>
        {isLoading&&<div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100px"}}><span class="loader"></span></div>}
        {error&&<div className='text-danger'>error from thunk</div>}
        <div className='d-flex gap-2 flex-wrap'>
        {products?.map((product)=>
        <ProductCard product={product} key={product.id}/>)}

        </div>
        

        </>
        
    )
}

export default ProductsWithThunk
