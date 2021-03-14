import React from "react";
import NavbarOption from "../NavbarOption/NavbarOption";
import "./Login_RegisterButton.scss";

const LoginRegisterButton = (props) => {
  return (
    <div className="Login_RegisterButton">
      <NavbarOption text="Login" color="#333385" to="/login" />
      <div className="line"></div>
      <NavbarOption text="Register" button color="white" />
    </div>
  );
};

export default LoginRegisterButton;
