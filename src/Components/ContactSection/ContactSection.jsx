import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import "./ContactSection.scss";

const ContactSection = (props) => {
  return (
    <div className="ContactSection">
      <h1>Contact Us</h1>
      <p>We Love to hear from you. Below are the ways you can get in touch.</p>

      <div className="content">
        <ContactForm />
        <div className="follow-us">
          <h2>Follow Us</h2>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="#"
            class="fa fa-facebook footer-link"
          />
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="#"
            class="fa fa-instagram footer-link"
          />
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="#"
            class="fa fa-twitter footer-link"
          />
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="#"
            class="fa fa-youtube footer-link"
          />
        </div>
      </div>

      <div className="footer">
        <p>Copyright &copy; 2021 All rights reserved</p>
      </div>
    </div>
  );
};

export default ContactSection;
