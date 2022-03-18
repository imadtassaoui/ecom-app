import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import CustomInput from "../custom-input/custom-input.component";

import "./register.styles.scss";

const Register = ({ toggleL }) => {
  return (
    <form className="register">
      <h2 className="title">Register</h2>
      <CustomInput class="input" placehoder="email" />
      <CustomInput class="input" placehoder="password" />
      <CustomInput class="input" placehoder="confirm password" />

      <input type="radio" name="Male" id="" />
      <input type="radio" name="Male" id="" />
      <CustomButton inverted={true} class="button">
        Register
      </CustomButton>
      <h2 onClick={toggleL}> back to login</h2>
    </form>
  );
};

export default Register;
