import React from "react";
import { NavLink } from "react-router-dom";
import LoginRegisterButton from "../Login_RegisterButton/Login_RegisterButton";
import NavbarOption from "../NavbarOption/NavbarOption";
import Hamburger from "./Hamburger/Hamburger";
import "./Navbar.scss";

const Navbar = ({ sidebar, showStatus }) => {
  return (
    <div data-aos="fade-down" data-aos-duration="700" className="Navbar">
      <NavLink to="/" className="title">
        TestHub
      </NavLink>

      <div className="options">
        <div className="main-option">
          <NavbarOption to="/generate-test" text="Generate Test" />
          <NavbarOption to="/online-test" text="Online Test" />
          <NavbarOption to="/blogs" text="Blog" />
        </div>
        <LoginRegisterButton />
      </div>

      <Hamburger show={showStatus} sidebar={sidebar} />
    </div>
  );
};

export default Navbar;
