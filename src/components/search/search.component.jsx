import React, { useEffect } from "react";
import { gsap } from "gsap";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import "./search.styles.scss";

const Search = ({ toggleSearch }) => {
  useEffect(() => {
    gsap.to(".search-box-container", {
      y: 200,
      autoAlpha: 1,
      duration: 0.5,
    });
  }, []);
  return (
    <div className="search">
      <div className="search-box-container">
        <div className="search-box">
          <SearchIcon style={{ color: "#fff", fontSize: 40 }} />
          <input type="text" placeholder="Search our store" />
        </div>
        <CloseIcon
          onClick={toggleSearch}
          style={{ color: "#fff", fontSize: 40 }}
        />
      </div>
      <div onClick={toggleSearch} className="search-result"></div>
    </div>
  );
};

export default Search;
