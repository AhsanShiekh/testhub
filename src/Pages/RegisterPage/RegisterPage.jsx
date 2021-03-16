import React from "react";
import "./RegisterPage.scss";
import PageHeader from "../../Components/PageHeader/PageHeader";
import image from "../../Assets/registerPageBG.png";
import Form from "../../Components/Form/Form";
import InputField from "../../Components/InputField/InputField";
import Button from "../../Components/Button/Button";
import { NavLink } from "react-router-dom";
import DropDown from "../../Components/DropDown/DropDown";

const RegisterPage = (props) => {
  return (
    <div className="RegisterPage">
      <PageHeader
        title="Register"
        subtitle="Create your account and join the biggest Question bank in Pakistan"
        bgImage={image}
      />

      <Form>
        <div className="content">
          <InputField type="text" placeholder="Username" />
          <InputField type="email" placeholder="Email" />
          <InputField type="password" placeholder="Password" />
          <InputField type="password" placeholder="Confirm Password" />
          <DropDown />
          <Button isSubmit text="Register" />
        </div>
        <div className="footer">
          <p>
            Already have an account?{" "}
            <NavLink to="/login" className="link">
              Login
            </NavLink>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default RegisterPage;
