import React from "react";
import MainSectionSearchBar from "../MainSectionSearchBar/MainSectionSearchBar";
import "./MainSection.scss";

const MainSection = (props) => {
  return (
    <div className="main-section-con">
      <div className="MainSection">
        <div className="content">
          <div>
            <h1 data-aos="fade-up" data-aos-duration="700" className="title">
              Biggest Question Bank in Pakistan
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="500"
              className="tagline"
            >
              You can generate, attempt the any type of test by using our
              services.
            </p>

            <MainSectionSearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
