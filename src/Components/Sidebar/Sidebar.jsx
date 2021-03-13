import React from "react";
import "./Sidebar.scss";
import NavbarOption from "../NavbarOption/NavbarOption";
import LoginRegisterButton from "../Login_RegisterButton/Login_RegisterButton";

const Sidebar = ({ show }) => {
  return (
    <>
      {show ? (
        <div className="Sidebar">
          <div className="options">
            <NavbarOption text="Generate Text" />
            <NavbarOption text="Online Test" />
            <NavbarOption text="Blog" />
            <LoginRegisterButton />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Sidebar;
