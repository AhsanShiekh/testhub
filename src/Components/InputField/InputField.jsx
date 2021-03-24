import React from "react";
import "./InputField.scss";

const InputField = ({
  placeholder,
  type,
  required,
  width = "80%",
  onChange,
  value,
  textarea,
}) => {
  return (
    <div style={{ width }} className="InputField">
      <p className="placeholder">{placeholder}</p>
      {textarea ? (
        <textarea
          type={type}
          required={required}
          onChange={(e) => onChange(e)}
          value={value}
          className="field"
          cols="30"
          rows="10"
        ></textarea>
      ) : (
        <input
          onChange={(e) => onChange(e)}
          required={required}
          type={type}
          className="field"
          value={value}
        />
      )}
    </div>
  );
};

export default InputField;
