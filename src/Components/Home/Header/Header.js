import React from "react";
import image from "../../../images/genesis-kr-main-key-visual-G70-SB-desktop-2560x900.jpg";
import image1 from "../../../images/genesis-ww-main-key-visual-gv80-02-desktop-2560x900-en.jpg";
import image2 from "../../../images/genesis-ww-main-key-visual-g80-01-desktop-2560x900-en.jpg";
import image3 from "../../../images/genesis-ww-main-key-visual-g80-01-desktop-2560x900-en.jpg";
import "./Header.css";
const Header = () => {
  return (
    <div
      className="design"
      style={{ fontFamily: "Quicksand", fontWeight: "700" }}
    >
      <div className="">
        <div className="row">
          {/* <div className="col-md-7 mt-5">
            <h3>
              Choose the custom apparel you <br /> want to Buy
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto non
              doloribus quae provident nulla ipsa magni iure quia nihil vel
              aliquid perspiciatis odio labore nemo sed, unde consectetur ea
              fugit?
            </p>
            <button className="btn btn-outline-danger text-white">
              See Full Catalog
            </button>
          </div> */}
          <div className="col-12">
            <div
              id="carouselExampleControls"
              class="carousel slide bg-transparent"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active img1">
                  <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi, adipisci!
                  </h1>
                  {/* <img src={image} class="d-block w-100" alt="..." /> */}
                </div>

                <div class="carousel-item img2"></div>
                <div class="carousel-item img3">
                  <h1>bkfce</h1>
                </div>
                <div class="carousel-item img4">
                  <h1>khfcref</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
