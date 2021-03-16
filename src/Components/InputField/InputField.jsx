import React from "react";
import "./InputField.scss";

const InputField = ({ placeholder, type, required }) => {
  return (
    <div className="InputField">
      <p className="placeholder">{placeholder}</p>
      <input required={required} type={type} className="field" />
    </div>
  );
};

export default InputField;
