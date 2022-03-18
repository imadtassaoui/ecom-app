import React from "react";
import CustomButton from "../custom-button/custom-button.component";

import "./sale-banner.styles.scss";

const SaleBanner = () => {
  return (
    <div className="sale-banner">
      <div className="text">
        <h1 className="title">New arrivals</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          viverra velit ac suscipit varius. Sed commodo justo sit amet leo
          elementum, non luctus lacus ullamcorper. Duis tempor tempus augue ut
          eleifend. Mauris ac libero ultrices, aliquet lacus at, dignissim quam.
          Curabitur eget rutrum tortor. Morbi tempus arcu felis, nec gravida
          lacus pretium eget. Nullam nunc purus, tempor tristique rhoncus non,
          porta ac nisl. Nam tortor mauris, pretium sit amet tellus at, pretium
          commodo risus.
        </p>
      </div>
      <CustomButton>shop now</CustomButton>
    </div>
  );
};

export default SaleBanner;
