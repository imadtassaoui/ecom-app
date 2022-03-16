import React from "react";
import CustomButton from "../custom-button/custom-button.component";

import "./sale-banner.styles.scss";

const SaleBanner = () => {
  return (
    <div className="sale-banner">
      <CustomButton>shop now</CustomButton>
    </div>
  );
};

export default SaleBanner;
