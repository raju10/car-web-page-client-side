import React from "react";
import CarImg from "../CarImg/CarImg";
import CarVideo from "../CarVideo/CarVideo";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Shop from "../Shop/Shop";

const Home = () => {
  return (
    <div style={{ background: "#111", overflow: "hidden" }}>
      <Navbar></Navbar>
      <Header></Header>
      <CarVideo></CarVideo>
      <CarImg></CarImg>
      <Shop></Shop>
    </div>
  );
};

export default Home;
