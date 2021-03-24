import React from "react";
import "./InstituteProfileSetup.scss";
import ProfilePic from "../ProfilePic/ProfilePic";
import InputField from "../InputField/InputField";
import DropDown from "../DropDown/DropDown";
import Button from "../Button/Button";

const dropdownData = [
  {
    text: "School",
    value: "SCHOOL",
  },
  {
    text: "College",
    value: "COLLEGE",
  },
  {
    text: "Academy",
    value: "ACADEMY",
  },
];

const InstituteProfileSetup = (props) => {
  return (
    <div className="InstituteProfileSetup">
      <ProfilePic />

      <InputField placeholder="Instiute Name" width="98%" />
      <InputField placeholder="Institute Email" width="98%" />
      <InputField placeholder="Institute Address" width="98%" />
      <InputField placeholder="Institute Phone No" width="98%" />
      <DropDown text="Institute Type" data={dropdownData} />
      <InputField placeholder="Bio" width="98%" textarea />

      <div className="buttons">
        <Button text="Done" />
        <p className="link">Change Password</p>
      </div>
    </div>
  );
};

export default InstituteProfileSetup;
