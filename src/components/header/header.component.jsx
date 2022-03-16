import React from "react";
import "./header.styles.scss";

import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
// icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CustomButton from "../custom-button/custom-button.component";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <h5>Logo</h5>
        <ul>
          <li>
            <a href="">
              <IconButton>
                <Badge badgeContent={2} color="secondary">
                  <FavoriteIcon />
                </Badge>
              </IconButton>
            </a>
          </li>
          <li>
            <a href="">
              <IconButton>
                <Badge badgeContent={4} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </a>
          </li>
        </ul>
      </nav>
      <div className="links">
        <ul>
          <li>
            <a href="">Men's</a>
          </li>
          <li>
            <a href="">Women's</a>
          </li>
          <li>
            <a href="">Hats</a>
          </li>
          <li>
            <a href="">Coats</a>
          </li>
          <li>
            <a href="">Shirts</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
