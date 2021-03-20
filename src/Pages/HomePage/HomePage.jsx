import React from "react";
import Footer from "../../Components/Footer/Footer";
import MainSection from "../../Components/HomePageComponents/MainSection/MainSection";
import "./HomePage.scss";

const HomePage = (props) => {
  return (
    <div className="homepage">
      <MainSection />
      <Footer />
    </div>
  );
};

export default HomePage;
