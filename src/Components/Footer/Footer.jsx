import React from "react";
import "./Footer.scss";

const ContactSection = (props) => {
  return (
    <div className="ContactSection">
      <div className="content">
        <div className="about">
          <h3>About</h3>
          <p>
            TestHub.Pk is online platform for educational institutes and
            students for provide them best test solution online without making
            any effort. <span className="learn-more">Learn More...</span>
          </p>
        </div>

        <div className="navigations">
          <h3>Navigations</h3>

          <p className="navigation">Ads</p>
          <p className="navigation">Our Blog</p>
          <p className="navigation">Contact Us</p>
          <p className="navigation">Terms and Conditions</p>
          <p className="navigation">Privacy Policy</p>
        </div>

        <div className="follow-us">
          <h2>Follow Us</h2>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="#about"
            className="fa fa-facebook footer-link"
          >
            {" "}
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="#about"
            className="fa fa-instagram footer-link"
          >
            {" "}
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="#about"
            className="fa fa-twitter footer-link"
          >
            {" "}
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="#about"
            className="fa fa-youtube footer-link"
          >
            {" "}
          </a>
        </div>
      </div>

      <div className="footer">
        <p>Copyright &copy; 2021 All rights reserved</p>
      </div>
    </div>
  );
};

export default ContactSection;
