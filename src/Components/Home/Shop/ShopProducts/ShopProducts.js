import React from "react";
import "./ShopProducts.css";
const ShopProducts = ({ pro, handelAddToCart }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
      <div className="ShopProducts-container">
        <div className="ShopProducts-detls">
          <h5>
            {" "}
            <small style={{ fontSize: "22px", color: "white" }}>
              {pro.name}
            </small>{" "}
            <small style={{ color: "gray", padding: "0px 5px" }}>
              {pro.tax}%
            </small>
            <big style={{ float: "right", color: "#ff5201" }}>${pro.price}</big>
          </h5>
        </div>
        <img src={pro.image} alt="" style={{ width: "100%" }} />
        <div className="addToCart-btn">
          <button onClick={() => handelAddToCart(pro)}>add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ShopProducts;
