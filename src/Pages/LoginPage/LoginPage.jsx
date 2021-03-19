import React from "react";
import "./LoginPage.scss";
import PageHeader from "../../Components/PageHeader/PageHeader";
import image from "../../Assets/loginPageBG.png";
import Form from "../../Components/Form/Form";
import InputField from "../../Components/InputField/InputField";
import Button from "../../Components/Button/Button";
import { NavLink } from "react-router-dom";
import ContactSection from "../../Components/ContactSection/ContactSection";

const LoginPage = (props) => {
  return (
    <div className="LoginPage">
      <PageHeader
        title="Log In"
        subtitle="Glad to see you back. Let's take you in and make some tests."
        bgImage={image}
      />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submitted");
        }}
      >
        <div className="content">
          <InputField required type="email" placeholder="Email" />
          <div className="pass-con">
            <InputField
              width="100%"
              required
              type="password"
              placeholder="Password"
            />
            <p className="link">Forgot Password?</p>
            <br />
          </div>
          <Button isSubmit text="Log In" />
        </div>

        <div className="footer">
          <p>
            Do not have an account?{" "}
            <NavLink className="link" to="/register">
              Sign Up
            </NavLink>
          </p>
        </div>
      </Form>
      <ContactSection />
    </div>
  );
};

export default LoginPage;
