import React from "react";
import "./Form.scss";

const Form = ({ children, onSubmit }) => {
  return (
    <form
      data-aos="fade-up"
      data-aos-duration="300"
      data-aos-delay="900"
      className="Form"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};

export default Form;
