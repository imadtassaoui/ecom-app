import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

// icons
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
//Components
import SideCart from "../side-cart/side-cart.component";
import CustomButton from "../custom-button/custom-button.component";
import Search from "../search/search.component";

const Header = () => {
  const [searchBox, toggleSearchBox] = useState(false);
  const [sideCart, toggleSideC] = useState(false);

  const sideC = useRef();

  const toggleSearch = () => {
    toggleSearchBox(!searchBox);
  };

  const toggleSideCart = () => {
    toggleSideC(!sideCart);
  };

  return (
    <div className="header">
      <div className="header-space"></div>
      {searchBox ? <Search toggleSearch={toggleSearch} /> : null}
      <div className="header-bar">
        <nav>
          <li>
            <SearchIcon onClick={toggleSearch} style={{ color: "white" }} />
          </li>

          <h5 className="logo">
            <Link to="/">Logo</Link>
          </h5>

          <ul>
            <li>
              <a href="">
                <Badge badgeContent={2} color="primary">
                  <FavoriteIcon style={{ color: "white" }} />
                </Badge>
              </a>
            </li>
            <li onClick={toggleSideCart}>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartIcon style={{ color: "white" }} />
              </Badge>
            </li>
          </ul>
        </nav>
        <div className="links">
          <ul>
            <li>
              <Link to="new-arrivals">New arrivals</Link>
            </li>
            <li>
              <Link to="mens">Men's</Link>
            </li>
            <li>
              <a href="">Women's</a>
            </li>
            <li>
              <Link to="signin">Account</Link>
            </li>
          </ul>
        </div>
        {sideCart ? (
          <SideCart ref={sideC} toggleSideCart={toggleSideCart} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
