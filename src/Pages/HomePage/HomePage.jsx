import React from "react";
import ContactSection from "../../Components/ContactSection/ContactSection";
import MainSection from "../../Components/HomePageComponents/MainSection/MainSection";
import "./HomePage.scss";

const HomePage = (props) => {
  return (
    <div className="homepage">
      <MainSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
