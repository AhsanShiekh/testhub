import React from "react";
import "./MainSectionSearchBar.scss";

const MainSectionSearchBar = (props) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-delay="800"
      className="MainSectionSearchBar"
    >
      <input
        placeholder="Search using class name such as FSc/ICS..."
        type="text"
        className="searchbar"
      />
      <button className="search">Search</button>
    </div>
  );
};

export default MainSectionSearchBar;
