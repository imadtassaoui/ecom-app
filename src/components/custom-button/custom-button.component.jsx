import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, inverted }) => {
  return (
    <div className="custom-button">
      <button className={`button ${inverted ? " inverted" : ""} `}>
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
