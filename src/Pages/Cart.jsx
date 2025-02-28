import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

function Cart() {
  const cart = useSelector((state) => state.cart);

  return (
    <div >
      {cart.Products.length === 0 ? (
        <p className="text-danger fs-5">There are no products here</p>
      ) : (
        <div className="d-flex flex-wrap  gap-2">
          {cart.Products?.map((product) => (
            <ProductCard key={product.id} product={product} isCartItem={true} />
          ))}
        </div>
      )}

      {/* Responsive Table */}
      <div className="table-responsive mt-4">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Total Price</th>
              <th>Total Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${cart.totalPrice?.toFixed(2)}</td>
              <td>{cart.totalQuantity}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cart;
