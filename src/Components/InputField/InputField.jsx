import React from "react";
import "./InputField.scss";

const InputField = ({ placeholder, type }) => {
  return (
    <div className="InputField">
      <p className="placeholder">{placeholder}</p>
      <input type={type} className="field" />
    </div>
  );
};

export default InputField;
