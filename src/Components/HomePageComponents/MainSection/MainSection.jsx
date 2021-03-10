import React from "react";
import MainSectionSearchBar from "../MainSectionSearchBar/MainSectionSearchBar";
import "./MainSection.scss";

const MainSection = (props) => {
  return (
    <div className="MainSection">
      <div className="content">
        <h1 className="title">Biggest Question Bank in Pakistan</h1>
        <p className="tagline">
          You can generate, attempt the any type of test by using our services.
        </p>

        <MainSectionSearchBar />
      </div>
    </div>
  );
};

export default MainSection;
