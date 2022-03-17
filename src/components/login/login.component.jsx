import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import CustomInput from "../custom-input/custom-input.component";

import "./login.styles.scss";

const Login = () => {
  return (
    <div className="login">
      <h2>Log In</h2>
      <CustomInput class="input" placehoder="email" />
      <CustomInput class="input" placehoder="password" />
      <CustomButton class="button">log in</CustomButton>
    </div>
  );
};

export default Login;
