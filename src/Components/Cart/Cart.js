import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddedCart from "./AddedCart/AddedCart";

const Cart = (props) => {
  const cart = props.cart;
  //   const [carts, setItem] = useState([]);
  //   setItem(cart);
  const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
  console.log(cart);

  return (
    <div>
      <h1>my cart : {cart.length}</h1>
      <h3>total : {totalPrice}</h3>
      <br />
      <Link to="/review">
        <button className="product-add-btn">Review Order</button>
      </Link>
    </div>
  );
};

export default Cart;
