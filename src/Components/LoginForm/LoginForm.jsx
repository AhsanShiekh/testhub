import React from "react";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import "./LoginForm.scss";

const LoginForm = (props) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="300"
      data-aos-delay="900"
      className="LoginForm"
    >
      <div className="content">
        <InputField type="email" placeholder="Email" />
        <div className="pass-con">
          <InputField type="password" placeholder="Password" />
          <p className="link">Forgot Password?</p>
          <br />
        </div>
        <Button text="Log In" />
      </div>

      <div className="footer">
        <p>
          Do not have an account? <p className="link">Sign Up</p>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
