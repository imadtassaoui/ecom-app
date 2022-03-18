import React from "react";
import Preview from "../preview/preview.component";

import FilterListIcon from "@mui/icons-material/FilterList";

import "./collection.styles.scss";
import BasicSelect from "../filter-by/filter-by.component";

const Collection = ({ title }) => {
  return (
    <div className="collection">
      <h1 className="collection-title">{title}</h1>
      <div className="collection-infos">
        <FilterListIcon />
        <h4>47 items</h4>
        <BasicSelect />
      </div>
      <div className="collection-items">
        <Preview />
        <Preview />
        <Preview />
        <Preview />
        <Preview />
        <Preview />
        <Preview />
        <Preview />
        <Preview />
        <Preview />
        <Preview />
        <Preview />
      </div>
    </div>
  );
};

export default Collection;
