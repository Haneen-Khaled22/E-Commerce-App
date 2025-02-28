import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';


function Favourites() {

    const fav = useSelector((state)=>state.fav);
    return (
       <>
       {fav.favourites == 0 ? (
               <p className="text-danger  fs-5">There is no products here </p>
             ) : (
               <div className="row d-flex">
                 {fav.favourites?.map((product) => (
                   <ProductCard key={product.id} product={product} isFavItem={true} />
                 ))}
               </div>
             )}
       </>
    )
}

export default Favourites;
