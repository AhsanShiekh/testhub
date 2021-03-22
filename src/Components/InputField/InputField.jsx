import React from "react";
import "./InputField.scss";

const InputField = ({
  placeholder,
  type,
  required,
  width = "80%",
  onChange,
  value,
}) => {
  return (
    <div style={{ width }} className="InputField">
      <p className="placeholder">{placeholder}</p>
      <input
        onChange={(e) => onChange(e)}
        required={required}
        type={type}
        className="field"
        value={value}
      />
    </div>
  );
};

export default InputField;
