import React from "react";
import "./PageHeader.scss";

const PageHeader = ({ title, subtitle, bgImage, smallTitle }) => {
  return (
    <div className="PageHeader">
      <img className="background" src={bgImage} alt="blog background" />
      <h1
        data-aos="fade-up"
        data-aos-duration="700"
        className={` ${smallTitle ? "small-title" : null} title`}
      >
        {title}
      </h1>
      <p
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="500"
        className="subtitle"
      >
        {subtitle}
      </p>
    </div>
  );
};

export default PageHeader;
