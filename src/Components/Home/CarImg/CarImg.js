import React from "react";
import car1 from "../../../images/1.jpg";
import car2 from "../../../images/2.jpg";
import car3 from "../../../images/3.jpg";
import car4 from "../../../images/4.jpg";
import car5 from "../../../images/5.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const CarImg = () => {
  return (
    <div style={{ background: "#111" }}>
      <Carousel>
        <div>
          <img src={car2} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={car3} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={car4} />
          <p className="legend">Legend 4</p>
        </div>
        <div>
          <img src={car5} />
          <p className="legend">Legend 5</p>
        </div>
      </Carousel>
    </div>
  );
};

export default CarImg;
