import React, { useContext, useEffect, useState } from "react";
import { NormalContext } from "../../App";

const Normal = (props) => {
  const [normal, setNormal] = useContext(NormalContext);
  //   const [raju, niya] = useState([]);
  const orders = [
    {
      name: props.pro.name,
      price: props.pro.price,
      image: props.pro.image,
    },
  ];
  useEffect(() => {
    setNormal(orders);
  }, []);

  console.log(normal);
  //////////////

  //////////////
  return <div></div>;
};

export default Normal;
