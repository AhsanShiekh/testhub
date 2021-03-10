import React from "react";
import "./NavbarOption.scss";

const NavbarOption = ({ text, color = "grey", button }) => {
  return (
    <p
      style={{ color: color }}
      className={` ${button ? "button" : ""} NavbarOption`}
    >
      {text}
    </p>
  );
};

export default NavbarOption;
