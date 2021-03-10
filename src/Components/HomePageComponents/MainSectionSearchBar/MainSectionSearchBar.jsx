import React from "react";
import "./MainSectionSearchBar.scss";

const MainSectionSearchBar = (props) => {
  return (
    <div className="MainSectionSearchBar">
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
