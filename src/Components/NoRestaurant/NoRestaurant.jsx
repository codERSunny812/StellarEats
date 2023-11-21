import React from "react";
import "./noRestaurant.css";
import animation from "../animation.json";
import Lottie from "lottie-react";
import "./noRestaurant.css";

const NoRestaurant = () => {
  return (
    <>
      <div className="container">
        <Lottie animationData={animation} className="anim" />
        <div className="text">
          <h1>no restaurant found with that name</h1>
          <p>Try to search other restaurants!!!!!</p>
        </div>
      </div>
    </>
  );
};

export default NoRestaurant;
