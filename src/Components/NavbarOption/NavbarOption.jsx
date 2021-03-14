import React from "react";
import "./NavbarOption.scss";
import { NavLink } from "react-router-dom";

const NavbarOption = ({ text, color = "grey", button, to, close = null }) => {
  return (
    <NavLink
      style={{ color: color }}
      className={` ${button ? "button" : ""} NavbarOption`}
      to={`${to}`}
      activeClassName="link-active"
      onClick={close ? () => close("hide") : null}
    >
      {text}
    </NavLink>
  );
};

export default NavbarOption;
