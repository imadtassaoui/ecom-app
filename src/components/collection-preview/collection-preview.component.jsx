import React from "react";

import "./collection-preview.styles.scss";

import Preview from "../preview/preview.component";

const CollectionPreview = ({ title }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="collection-preview-container">
        <div className="collection-preview-items">
          <Preview />
          <Preview />
          <Preview />
          <Preview />
        </div>
        <h2 className="action">find--more</h2>
      </div>
    </div>
  );
};

export default CollectionPreview;
