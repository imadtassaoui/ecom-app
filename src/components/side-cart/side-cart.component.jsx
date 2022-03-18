import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

import "./side-cart.styles.scss";

import CloseIcon from "@mui/icons-material/Close";

import CustomButton from "../custom-button/custom-button.component";

const SideCart = ({ toggleSideCart }) => {
  useEffect(() => {
    showCartAnimation();
  }, []);

  const showCartAnimation = () => {
    gsap.from(".side-cart-section", { opacity: 0, x: 500, duration: 0.2 });
  };

  // const hideCartAnimation = () => {
  //   gsap.to(".side-cart-section", { opacity: 0, x: -500, duration: 0.2 });
  // };

  return (
    <div className="side-cart">
      <div onClick={toggleSideCart} className="back"></div>
      <div className="side-cart-section">
        <div className="side-cart-icon">
          <CloseIcon
            onClick={toggleSideCart}
            style={{ cursor: "pointer", fontSize: "50" }}
          />
        </div>
        <div className="action-buttons">
          <CustomButton inverted>Go to cart</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default SideCart;
