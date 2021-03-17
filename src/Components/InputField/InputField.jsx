import React from "react";
import "./InputField.scss";

const InputField = ({ placeholder, type, required, width = "80%" }) => {
  return (
    <div style={{ width }} className="InputField">
      <p className="placeholder">{placeholder}</p>
      <input required={required} type={type} className="field" />
    </div>
  );
};

export default InputField;
