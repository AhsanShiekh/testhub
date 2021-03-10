import React from "react";
import NavbarOption from "../NavbarOption/NavbarOption";
import "./Navbar.scss";

const Navbar = (props) => {
  return (
    <div className="Navbar">
      <h2 className="title">TestHub</h2>

      <div className="options">
        <div className="main-option">
          <NavbarOption text="Generate Test" />
          <NavbarOption text="Attempt Test" />
          <NavbarOption text="Online Test" />
        </div>
        <div className="login-register">
          <NavbarOption text="Login" color="#333385" />
          <div className="line"></div>
          <NavbarOption text="Register" button color="white" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
