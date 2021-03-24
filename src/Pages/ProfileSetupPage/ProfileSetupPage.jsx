import React from "react";
import InstituteProfileSetup from "../../Components/InstituteProfileSetup/InstituteProfileSetup";
import StudentProfileSetup from "../../Components/StudentProfileSetup/StudentProfileSetup";
import "./ProfileSetupPage.scss";

const ProfileSetupPage = (props) => {
  return (
    <div className="ProfileSetupPage">
      <h2>Configure Your Profile</h2>

      {/* <StudentProfileSetup /> */}
      <InstituteProfileSetup />
    </div>
  );
};

export default ProfileSetupPage;
