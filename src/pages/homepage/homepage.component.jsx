import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import SaleBanner from "../../components/sale-banner/sale-banner.component";

import "./homepage.styles.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <SaleBanner />
      <CollectionPreview title="men's" />
      <CollectionPreview title="women's" />
    </div>
  );
};

export default HomePage;
