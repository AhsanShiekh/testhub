import React, { useState } from "react";
import "./RegisterPage.scss";
import PageHeader from "../../Components/PageHeader/PageHeader";
import image from "../../Assets/registerPageBG.png";
import Form from "../../Components/Form/Form";
import InputField from "../../Components/InputField/InputField";
import Button from "../../Components/Button/Button";
import { NavLink } from "react-router-dom";
import DropDown from "../../Components/DropDown/DropDown";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import { APIURL } from "../../Config/constants";
import { useDispatch } from "react-redux";
import { showHideAlert } from "../../redux/Alert/Alert.actions";
import { showAlert } from "../../Components/Alert/Alert";

const RegisterPage = ({ history }) => {
  const dispatch = useDispatch();
  const [showLoading, setShowLoading] = useState(false);
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "",
  });

  const chackPasswords = () => {
    const { password, confirmPassword } = state;

    if (password !== confirmPassword) {
      showAlert(dispatch, "error", "Passwords Don't Match.");
      return false;
    }
    if (password.length < 8) {
      showAlert(dispatch, "error", "Password Must be 8 characters long.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(e);

    const { username, email, password, accountType } = state;

    if (chackPasswords()) {
      setShowLoading(true);
      const res = await axios.post(`${APIURL}/auth/sign-up/`, {
        username,
        email,
        password,
        accountType,
      });
      if (res.data.created) {
        showAlert(
          dispatch,
          "success",
          "Your Account was created. Please Log in to get Started."
        );
        history.push("/login");
      }
      setShowLoading(false);
    }
  };

  return (
    <div className="RegisterPage">
      <PageHeader
        title="Register"
        subtitle="Create your account and join the biggest Question bank in Pakistan"
        bgImage={image}
      />

      <Form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-content">
          <InputField
            value={state.username}
            onChange={(e) => setState({ ...state, username: e.target.value })}
            type="text"
            placeholder="Username"
            required
          />
          <InputField
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
            type="email"
            placeholder="Email"
            required
          />
          <InputField
            value={state.password}
            onChange={(e) => setState({ ...state, password: e.target.value })}
            type="password"
            placeholder="Password"
            required
          />
          <InputField
            value={state.confirmPassword}
            onChange={(e) =>
              setState({ ...state, confirmPassword: e.target.value })
            }
            type="password"
            placeholder="Confirm Password"
            required
          />
          <DropDown
            value={state.accountType}
            onChange={(e) =>
              setState({ ...state, accountType: e.target.value })
            }
            required
          />
          <Button showLoading={showLoading} isSubmit text="Register" />
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
      <Footer />
    </div>
  );
};

export default RegisterPage;
