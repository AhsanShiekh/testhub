import React from "react";
import LoginRegisterButton from "../Login_RegisterButton/Login_RegisterButton";
import NavbarOption from "../NavbarOption/NavbarOption";
import Hamburger from "./Hamburger/Hamburger";
import "./Navbar.scss";

const Navbar = ({ sidebar }) => {
  return (
    <div data-aos="fade-down" data-aos-duration="700" className="Navbar">
      <h2 className="title">TestHub</h2>

      <div className="options">
        <div className="main-option">
          <NavbarOption text="Generate Test" />
          <NavbarOption text="Online Test" />
          <NavbarOption text="Blog" />
        </div>
        <LoginRegisterButton />
      </div>

      <Hamburger sidebar={sidebar} />
    </div>
  );
};

export default Navbar;
