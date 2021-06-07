import React from "react";

const AddedCart = ({ pro }) => {
  console.log(pro);
  return (
    <div className="col-4">
      <img src={pro.image} alt="" style={{ width: "100%" }} />
    </div>
  );
};

export default AddedCart;
