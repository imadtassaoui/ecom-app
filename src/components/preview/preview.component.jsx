import React from "react";

import model from "./model.png";
import model2 from "./model2.png";
import "./preview.styles.scss";

const Preview = () => {
  return (
    <div className="preview">
      <div className="images">
        <img src={model} alt="" className="primary" />
        <img src={model2} alt="" className="secondary" />
      </div>
      <div className="text">
        {/* <h1 className="new">new</h1> */}
        <h2 className="name">DOUBLE-FACED JACKET</h2>
        <h3 className="price">89.95 EUR</h3>
      </div>
    </div>
  );
};

export default Preview;
