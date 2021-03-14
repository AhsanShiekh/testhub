import React from "react";
import "./LoginPage.scss";
import PageHeader from "../../Components/PageHeader/PageHeader";
import image from "../../Assets/loginPageBG.png";
import LoginForm from "../../Components/LoginForm/LoginForm";

const LoginPage = (props) => {
  return (
    <div className="LoginPage">
      <PageHeader
        title="Log In"
        subtitle="Glad to see you back. Let's take you in and make some tests."
        bgImage={image}
      />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
