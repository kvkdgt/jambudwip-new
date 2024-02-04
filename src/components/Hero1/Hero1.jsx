import React, { useState } from "react";
import sareeModel from "../Assets/sareeModel.png";
import "./Hero1.css";

const Hero1 = () => {
  return (
    <>
      <div className="hero" style={{marginTop:'110px'}}>
        <div className="hero-text">
          <h1>
            Welcome to <span className="saree-store"> Jambudwip Jewellers</span>
          </h1>
          <p>Discover the best deals on your favorite products.</p>
        </div>
        <div className="hero-image">
          <img src={sareeModel} style={{ height: "100%" }} alt="" />
        </div>
      </div>
    
    </>
  );
};

export default Hero1;
