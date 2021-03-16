import React from "react";
import NavbarOption from "../NavbarOption/NavbarOption";
import "./Login_RegisterButton.scss";

const LoginRegisterButton = ({ closeSidebar }) => {
  return (
    <div className="Login_RegisterButton">
      <NavbarOption
        close={closeSidebar}
        onClick
        text="Login"
        color="#333385"
        to="/login"
      />
      <div className="line"></div>
      <NavbarOption
        close={closeSidebar}
        text="Register"
        button
        color="white"
        to="/register"
      />
    </div>
  );
};

export default LoginRegisterButton;
