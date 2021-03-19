import React from "react";
import "./ContactForm.scss";

const ContactForm = (props) => {
  return (
    <form className="ContactForm">
      <h1>Get in Touch</h1>
      <input placeholder="Your Email" type="text" className="input" />
      <br />
      <input placeholder="Your Subject(Topic)" type="text" className="input" />
      <br />
      <textarea
        placeholder="Your Message"
        className="textarea"
        cols="30"
        rows="10"
      ></textarea>
      <br />
      <input className="submit" value="Send" readOnly />
    </form>
  );
};

export default ContactForm;
