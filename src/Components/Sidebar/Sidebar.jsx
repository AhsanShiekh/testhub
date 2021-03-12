import React from "react";
import "./Sidebar.scss";

const Sidebar = ({ show }) => {
  return (
    <>
      {show ? (
        <div className="Sidebar" style={{ backgroundColor: "white" }}>
          <div className=""></div>
        </div>
      ) : null}
    </>
  );
};

export default Sidebar;
