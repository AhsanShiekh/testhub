import React from "react";
import "./Sidebar.scss";
import NavbarOption from "../NavbarOption/NavbarOption";
import LoginRegisterButton from "../Login_RegisterButton/Login_RegisterButton";

const Sidebar = ({ show, close }) => {
  return (
    <>
      {show ? (
        <div className="Sidebar">
          <div className="options">
            <NavbarOption
              close={close}
              to="/generate-test"
              text="Generate Text"
            />
            <NavbarOption close={close} to="online-test" text="Online Test" />
            <NavbarOption close={close} to="/blogs" text="Blog" />
            <LoginRegisterButton />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Sidebar;
