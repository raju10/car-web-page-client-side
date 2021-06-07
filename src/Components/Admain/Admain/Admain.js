import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import SideNavbar from "../../Home/Navbar/SideNavbar/SideNavbar";

import AddAdmainProduct from "../AddAdmainProduct/AddAdmainProduct";

const Admain = () => {
  //   const [loginUser, setLoginUser] = useContext(UserContext);
  //   const [loginUserEmails, setLoginUserEmails] = useState([]);
  //   console.log("loginUserEmails", loginUserEmails);
  //
  //const [admainEmail, setAdmainEmail] = useState([]);
  //   console.log("admainEmail", admainEmail);
  //
  //   const [isAdmain, setIsAdmain] = useState(false);
  //////
  const onSubmit = (data) => console.log(data);
  //   useEffect(() => {
  //     fetch("https://morning-sea-22549.herokuapp.com/ourProduct")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setLoginUserEmails(data);
  //       });
  //   }, []);

  //   useEffect(() => {
  //     fetch("https://morning-sea-22549.herokuapp.com/ourAdmain")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setAdmainEmail(data);
  //       });
  //   }, []);
  /////////////
  //   useEffect(() => {
  //     fetch("https://morning-sea-22549.herokuapp.com/isAdmain", {
  //       method: "POST",
  //       headers: { "content-type": "application/json" },
  //       body: JSON.stringify({ email: loginUser.loginUserEmail }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => setIsAdmain(data));
  //   }, []);
  ////////////
  return (
    <div>
      (
      <div
        style={{ background: "#f4fdfb", overflow: "hidden", padding: "10px" }}
      >
        {/* <Sidebar></Sidebar> */}
        <SideNavbar></SideNavbar>
        <div className="row ">
          <div className="d-flex justify-content-center">
            <div className="col-md-4 " style={{ paddingLeft: "70px" }}>
              <AddAdmainProduct onSubmit={onSubmit}></AddAdmainProduct>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admain;
