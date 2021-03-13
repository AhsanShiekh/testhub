import React from "react";
import "./Hamburger.scss";

const Hamburger = ({ sidebar, show }) => {
  return (
    <div
      className={` ${show ? "cross" : null} Hamburger`}
      onClick={() => sidebar(show ? "hide" : "show")}
    >
      <div className="line l1"></div>
      <div className="line l2"></div>
      <div className="line l3"></div>
    </div>
  );
};

export default Hamburger;
