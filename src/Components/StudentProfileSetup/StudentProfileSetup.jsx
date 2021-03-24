import React from "react";
import ProfilePic from "../ProfilePic/ProfilePic";
import InputField from "../InputField/InputField";
import "./StudentProfileSetup.scss";
import Button from "../Button/Button";

const StudentProfileSetup = (props) => {
  return (
    <div className="StudentProfileSetup">
      <ProfilePic />

      <InputField placeholder="First Name" width="98%" />
      <InputField placeholder="Last Name" width="98%" />
      <InputField placeholder="Address" width="98%" />
      <InputField placeholder="Phone No" width="98%" />
      <InputField placeholder="Email" width="98%" />
      <InputField placeholder="Bio" width="98%" textarea />

      <div className="buttons">
        <Button text="Done" />
        <p className="link">Change Password</p>
      </div>
    </div>
  );
};

export default StudentProfileSetup;
