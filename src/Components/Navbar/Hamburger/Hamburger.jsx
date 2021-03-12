import React from "react";
import "./Hamburger.scss";

const Hamburger = ({ sidebar }) => {
  const showHideSidebar = () => {
    const Hamburger = document.getElementsByClassName("Hamburger")[0];

    if (Hamburger.classList.contains("cross")) {
      Hamburger.classList.remove("cross");
      sidebar("hide");
    } else {
      Hamburger.classList.add("cross");
      sidebar("show");
    }
  };

  return (
    <div className="Hamburger" onClick={showHideSidebar}>
      <div className="line l1"></div>
      <div className="line l2"></div>
      <div className="line l3"></div>
    </div>
  );
};

export default Hamburger;
