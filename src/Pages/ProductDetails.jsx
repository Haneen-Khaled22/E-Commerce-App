import React from 'react'
import { data, useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import axiosInstance from "../utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

function ProductDetails() {
    const { id } = useParams();

    const { data } = useQuery({
      queryKey: ["PRODUCT", id],
      queryFn: async () => {
        const response = await axiosInstance.get(`/products/${id}`);
        return response.data;
      },
    });
  
    return <>{data && <ProductCard product={data}/>}</>;
}

export default ProductDetails;
