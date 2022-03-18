import React, { useState } from "react";

import "./sign-in.styles.scss";

import Login from "../../components/login/login.component";
import Register from "../../components/register/register.component";

const SignIn = () => {
  const [log, toggleLog] = useState(true);
  const toggleL = () => {
    return toggleLog(!log);
  };
  return (
    <div className="sign-in">
      {log ? <Login toggleL={toggleL} /> : <Register toggleL={toggleL} />}
    </div>
  );
};

export default SignIn;
