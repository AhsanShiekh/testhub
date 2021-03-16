import React from "react";
import "./Form.scss";

const Form = ({ children, onSubmit }) => {
  return (
    <form className="Form" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
