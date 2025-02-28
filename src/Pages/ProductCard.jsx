import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  addToCart,
  removeFromCart,
  addQuantity,
  decreaseQuantity,
} from "../redux/Slices/CartSlice";
import {
  addToFavorite,
  removeFromFavorite,
} from "../redux/Slices/FavouriteSlice";
import { GoStar, GoStarFill } from "react-icons/go";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineAdd } from "react-icons/md";
import { RiSubtractFill } from "react-icons/ri";

function ProductCard({ product, isCartItem = false }) {
  const dispatch = useDispatch();

  const favourites = useSelector((state) => state.fav.favourites);

  const isFavItem = favourites.some(
    (favProduct) => favProduct.id === product.id
  );

  const handleAddToCart = (event) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (event) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(removeFromCart(product));
  };

  const addQuantityProduct = (event) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(addQuantity(product));
  };

  const handleDecreaseProduct = (event) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(decreaseQuantity(product));
  };

  const toggleFavorite = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (isFavItem) {
      dispatch(removeFromFavorite(product));
    } else {
      dispatch(addToFavorite(product));
    }
  };

  return (
    <Link to={`/products/${product.id}`}>
     
      <div
        className="card mb-4 m-2 col-12 d-flex flex-column justify-content-between"
        style={{ width: "250px", height: "450px" }}
        
      >
        <img src={product.imgURL} alt={product.name} style={styles.imgcard} />
        <div className="card-body d-flex flex-column justify-content-between">
          <div className="d-flex justify-content-between align-items-center">
            <div>

            </div>
            <p
              className="card-text"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                flexGrow: 1,
                whiteSpace: "nowrap",
                overflow:"hidden",
                textOverflow:"ellipsis",
              }}
            >
              {product.name}
            </p>
            <div style={{ alignSelf: "flex-start" }}>
              {isFavItem ? (
                <GoStarFill
                  style={{ color: "rgb(190, 155, 131)", fontSize: "24px" }}
                  onClick={toggleFavorite}
                />
              ) : (
                <GoStar
                  style={{ color: "rgb(190, 155, 131)", fontSize: "24px" }}
                  onClick={toggleFavorite}
                />
              )}
            </div>
          </div>

          {isCartItem ? (
            
            <div className="d-flex">
              <button className="addtocart" onClick={handleRemoveFromCart}>
                Remove from Cart
              </button>
              <div className="d-flex justify-content-center align-items-center">
                <MdOutlineAdd
                  onClick={addQuantityProduct}
                  className="addordec"
                />
                <div style={{ fontWeight: "bold" }}>{product.quantity}</div>
                <RiSubtractFill
                  onClick={handleDecreaseProduct}
                  className="addordec"
                />
              </div>
            </div>
          ) : (
            <div className="d-flex justify-content-center align-items-center">
              <div className="pricediv">${product.price}</div>
              <button className="addtocart" onClick={handleAddToCart}>
                <FaCartShopping style={{ fontSize: "16px" }} />
                Add to cart
              </button>
            </div>
          )}
        </div>
      </div>
      
    </Link>
  );
}

export default ProductCard;

const styles = {
  imgcard: {
    height: "300px",
    objectFit: "cover",
  },
};
