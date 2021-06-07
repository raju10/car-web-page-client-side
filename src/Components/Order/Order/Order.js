import React, { useContext } from "react";
import { UserContext } from "../../../App";
import ClientNavbar from "../../Home/Navbar/ClientNavbar/ClientNavbar";
import YourSelcOrder from "../YourSelcOrder/YourSelcOrder";

const Order = ({ yourAdditingPro }) => {
  const [loginUser, setLoginUser] = useContext(UserContext);
  console.log("loginUser", loginUser);
  return (
    <section>
      <div>
        <ClientNavbar></ClientNavbar>
      </div>
      <div className="row " style={{ background: "#f4fdfb" }}>
        <div
          className="d-flex justify-content-center"
          style={{ paddingLeft: "80px" }}
        >
          <div className="col-md-10 ">
            <YourSelcOrder yourAdditingPro={yourAdditingPro}></YourSelcOrder>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
