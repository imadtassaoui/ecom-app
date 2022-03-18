import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import CustomInput from "../custom-input/custom-input.component";

import "./login.styles.scss";

const Login = ({ toggleL }) => {
  return (
    <div className="login">
      <form className="login-form">
        <h2 className="title">Log In</h2>
        <CustomInput class="input" placehoder="email" />
        <CustomInput class="input" placehoder="password" />
        <CustomButton inverted={true} class="button">
          log in
        </CustomButton>
        <h1 onClick={toggleL}>register</h1>
      </form>
      <div className="image"></div>
    </div>
  );
};

export default Login;
