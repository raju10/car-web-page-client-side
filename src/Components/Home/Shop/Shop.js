import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NormalContext, UserContext, userOrderContext } from "../../../App";
import AddedCart from "../../Cart/AddedCart/AddedCart";
import Cart from "../../Cart/Cart";
import Normal from "../../Normal/Normal";
import Order from "../../Order/Order/Order";
import ShopProducts from "./ShopProducts/ShopProducts";

const Shop = () => {
  const [normal, setNormal] = useContext(NormalContext);
  const [selcOrder, setSelcOrder] = useContext(userOrderContext);
  console.log("selcOrder", selcOrder);
  const [loginUser, setLoginUser] = useContext(UserContext);
  console.log("loginUser", loginUser);
  //////
  const [addPro, setAddPro] = useState([]);
  const [addPros, setAddPros] = useState([]);
  console.log("addPros", addPros);
  ////
  const [cart, setCart] = useState([]);
  console.log("cart", cart);
  const [carts, setCarts] = useState([]);
  console.log("carts", carts);
  // setSelcOrder(cart);

  /////
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/ourProduct")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  /////////////////
  const handelAddToCart = (pd) => {
    console.log("pd", pd);
    const newCart = [...cart, pd];

    setCart(newCart);

    const sameProduct = newCart.filter((pro) => pro._id === pd._id);
    console.log("sameProduct", sameProduct);
    const count = sameProduct.length;

    setAddPro(pd.key, count);
  };
  // ///////////////
  const [raju, setRaju] = useState({});
  console.log("raju", raju);
  const yourAdditingPro = (pd) => {
    console.log("pd", pd);
    pd.map((prd) => {
      const pdd = {
        name: prd.name,
        image: prd.image,
      };
      console.log(pdd);
      setRaju(pdd);
    });

    fetch("http://localhost:4000/addOrder", {
      method: "POST",
      body: JSON.stringify(),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  ///////////////

  ///////////////
  return (
    <section className="container">
      {/* //// */}
      <div className="row " style={{ background: "#111" }}>
        <div className=" col-sm-8">
          <div className="row ">
            {products.map((pro) => (
              <ShopProducts
                pro={pro}
                handelAddToCart={handelAddToCart}
              ></ShopProducts>
            ))}
          </div>
        </div>
        <div
          className="col-sm-4 d-flex  align-items-center justify-content-center"
          style={{ padding: "30px" }}
        >
          {cart.length === 0 ? (
            <p style={{ color: "red" }}>
              {" "}
              You don't haven't any products buy...please, Buy the product first
            </p>
          ) : (
            <div className="row">
              {cart.map((pro) => (
                <AddedCart pro={pro}></AddedCart>
              ))}
              <div className="addToCart-btn">
                <Link to="/order">
                  <button onClick={() => yourAdditingPro(cart)}>
                    check in
                  </button>
                </Link>
                {/* {cart.map((pro) => (
                  <Normal pro={pro}></Normal>
                ))} */}
              </div>
            </div>
          )}
          {/* <Cart cart={cart}></Cart> */}
        </div>
      </div>
    </section>
  );
};

export default Shop;
