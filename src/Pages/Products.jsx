import React, { useState } from "react";
// import Products from './Products';
import "bootstrap/dist/css/bootstrap.min.css";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";
import ProductCard from "./ProductCard";

function Products() {
  // const products = [
  //     {
  //       id: "1",
  //       name: "Odense 8-Seater Top Dining Table",
  //       price: 2150000,
  //       quantity: 0,
  //       imgURL:
  //         "https://chevignon.com/cdn/shop/files/WECTC0010132_A.jpg",
  //       categoryID: 1,
  //       matrial: "Engineered Wood",
  //       description:
  //         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.",
  //     },
  //     {
  //       id: "5",
  //       name: "Trixia 4-Seater Glass Dining Table",
  //       price: 31240000,
  //       quantity: 8,
  //       imgURL:
  //         "https://img.sonofatailor.com/images/customizer/product/extra-heavy-cotton/ss/Black.jpg",
  //       categoryID: 1,
  //       matrial: "Metal",
  //       description:
  //         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.",
  //     },
  //     {
  //       id: "25",
  //       name: "Gasha Marble Top Side Table",
  //       price: 1154000,
  //       quantity: 10,
  //       imgURL:
  //         "https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77084783_02.jpg",
  //       categoryID: 1,
  //       matrial: "Metal",
  //       description:
  //         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.",
  //     },
  //     {
  //       id: "7",
  //       name: "Ventura Fabric Dining Chair",
  //       price: 12346500,
  //       quantity: 2,
  //       imgURL:
  //         "https://www.redwolf.in/image/cache/catalog/featured_categories/t-shirts-for-men-featured-480x480.jpg",
  //       categoryID: 2,
  //       matrial: "Upholstered Seating",
  //       description:
  //         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.",
  //     },
  //     {
  //         id: "2",
  //         name: "Odense 8-Seater Top Dining Table",
  //         price: 2150000,
  //         quantity: 0,
  //         imgURL:
  //          "https://chevignon.com/cdn/shop/files/WECTC0010132_A.jpg",
  //         categoryID: 1,
  //         matrial: "Engineered Wood",
  //         description:
  //           "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.",
  //       },
  //       {
  //         id: "3",
  //         name: "Trixia 4-Seater Glass Dining Table",
  //         price: 31240000,
  //         quantity: 8,
  //         imgURL:
  //         "https://img.sonofatailor.com/images/customizer/product/extra-heavy-cotton/ss/Black.jpg",
  //         categoryID: 1,
  //         matrial: "Metal",
  //         description:
  //           "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.",
  //       },
  //       {
  //         id: "29",
  //         name: "Gasha Marble Top Side Table",
  //         price: 1154000,
  //         quantity: 10,
  //         imgURL:
  //         "https://chevignon.com/cdn/shop/files/WECTC0010132_A.jpg",
  //         categoryID: 1,
  //         matrial: "Metal",
  //         description:
  //           "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.",
  //       },
  //       {
  //         id: "6",
  //         name: "Ventura Fabric Dining Chair",
  //         price: 12346500,
  //         quantity: 2,
  //         imgURL:
  //         "https://img.sonofatailor.com/images/customizer/product/extra-heavy-cotton/ss/Black.jpg",
  //         categoryID: 2,
  //         matrial: "Upholstered Seating",
  //         description:
  //           "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.",
  //       },
  //       {
  //         id: "4",
  //         name: "Odense 8-Seater Top Dining Table",
  //         price: 2150000,
  //         quantity: 0,
  //         imgURL:
  //           "https://chevignon.com/cdn/shop/files/WECTC0010132_A.jpg",
  //         categoryID: 1,
  //         matrial: "Engineered Wood",
  //         description:
  //           "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.",
  //       },
  //       {
  //         id: "32",
  //         name: "Trixia 4-Seater Glass Dining Table",
  //         price: 31240000,
  //         quantity: 8,
  //         imgURL:
  //           "https://img.sonofatailor.com/images/customizer/product/extra-heavy-cotton/ss/Black.jpg",
  //         categoryID: 1,
  //         matrial: "Metal",
  //         description:
  //           "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.",
  //       },
  //       {
  //         id: "65",
  //         name: "Gasha Marble Top Side Table",
  //         price: 1154000,
  //         quantity: 10,
  //         imgURL:
  //           "https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77084783_02.jpg",
  //         categoryID: 1,
  //         matrial: "Metal",
  //         description:
  //           "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.",
  //       },
  //       {
  //         id: "33",
  //         name: "Ventura Fabric Dining Chair",
  //         price: 12346500,
  //         quantity: 2,
  //         imgURL:
  //           "https://www.redwolf.in/image/cache/catalog/featured_categories/t-shirts-for-men-featured-480x480.jpg",
  //         categoryID: 2,
  //         matrial: "Upholstered Seating",
  //         description:
  //           "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.",
  //       },
  //       {
  //           id: "22",
  //           name: "Odense 8-Seater Top Dining Table",
  //           price: 2150000,
  //           quantity: 0,
  //           imgURL:
  //             "https://www.redwolf.in/image/cache/catalog/featured_categories/t-shirts-for-men-featured-480x480.jpg",
  //           categoryID: 1,
  //           matrial: "Engineered Wood",
  //           description:
  //             "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.",
  //         },
  //         {
  //           id: "90",
  //           name: "Trixia 4-Seater Glass Dining Table",
  //           price: 31240000,
  //           quantity: 8,
  //           imgURL:
  //            "https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77084783_02.jpg",
  //           categoryID: 1,
  //           matrial: "Metal",
  //           description:
  //             "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.",
  //         },
  //         {
  //           id: "68",
  //           name: "Gasha Marble Top Side Table",
  //           price: 1154000,
  //           quantity: 10,
  //           imgURL:
  //           "https://img.sonofatailor.com/images/customizer/product/extra-heavy-cotton/ss/Black.jpg",
  //           categoryID: 1,
  //           matrial: "Metal",
  //           description:
  //             "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.",
  //         },
  //         {
  //           id: "45",
  //           name: "Ventura Fabric Dining Chair",
  //           price: 12346500,
  //           quantity: 2,
  //           imgURL:
  //           "https://chevignon.com/cdn/shop/files/WECTC0010132_A.jpg",
  //           categoryID: 2,
  //           matrial: "Upholstered Seating",
  //           description:
  //             "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.",
  //         },
  //   ];

  const {
    data: Products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["PRODUCTS"],
    queryFn: async () => {
      const response = await axiosInstance.get("/products");
      console.log(response);
      return response.data;
    },
  });

  return (
    <div>
      {isLoading && (
        <div className="d-flex justify-content-center mt-5 align-items-center">
          <div className="spinner-border text-muted "></div>
        </div>
      )}

      {error? (
        <div>{error.message}</div>
      ) : (

        <div className="products-contianer ">
          {Products?.map((product) => (
            <ProductCard key={product.id} product={product} 
            isCartItem={false} isFavItem={false}/>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;

const styles = {
  imgcard: {
    height: "350px",
  },
};
