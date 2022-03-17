import React from "react";

import Login from "../../components/login/login.component";
import Register from "../../components/register/register.component";

import "./sign-in.styles.scss";

const SignIn = () => {
  return (
    <div className="sign-in">
      <Login />
      <Register />
    </div>
  );
};

export default SignIn;
