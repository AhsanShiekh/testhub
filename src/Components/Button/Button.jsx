import React from "react";
import "./Button.scss";

const Button = ({ text, isSubmit, onClick }) =>
  isSubmit ? (
    <input type="submit" className="Button" value={text} />
  ) : (
    <button className="Button" onClick={onClick}>
      {text}
    </button>
  );

export default Button;
