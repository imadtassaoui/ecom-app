import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children }) => {
  return (
    <div className="custom-button">
      <button>{children}</button>
    </div>
  );
};

export default CustomButton;
