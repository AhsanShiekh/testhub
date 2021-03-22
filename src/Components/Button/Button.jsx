import React from "react";
import "./Button.scss";
import { CircularProgress } from "@material-ui/core";

const Button = ({ text, isSubmit, onClick, showLoading }) => (
  <button
    type={isSubmit ? "submit" : "button"}
    className="Button"
    onClick={onClick}
  >
    {!showLoading ? text : <CircularProgress size={20} color="white" />}
  </button>
);

export default Button;
