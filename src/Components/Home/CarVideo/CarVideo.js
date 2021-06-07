import React, { useState } from "react";
import "./CarVideo.css";
const CarVideo = () => {
  const [raju, setRaju] = useState(false);
  console.log(raju);
  const handelOnClick = (pd) => {
    pd = (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/-xdZcPDvqGE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    );
    setRaju(pd);
  };
  /////
  // const stopVideo = () => {
  //   const remove = document.getElementById("remove");
  //   remove.style.display = "none";
  // };
  /////
  return (
    <div style={{ background: "#111", padding: "50px 0px" }}>
      <div className="container carvideo-container">
        {raju && true ? (
          <div id="remove" className="d-flex justify-content-center">
            {/* <h1 onClick={stopVideo} id="remove">
            hellow
          </h1> */}

            <iframe
              width="50%"
              height="400px"
              src="https://www.youtube.com/embed/-xdZcPDvqGE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            {/* <p
            onClick={stopVideo}
            className="remove-btn"
            style={{ color: "red", fontSize: "50px" }}
          >
            X
          </p> */}
          </div>
        ) : (
          <div className="click-btn">
            <button onClick={handelOnClick}>click</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarVideo;
