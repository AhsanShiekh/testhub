import React from "react";
import FileInput from "../FileInput/FileInput.component";
import "./ProfilePic.scss";

const ProfilePic = (props) => {
  return (
    <div className="ProfilePic">
      <img
        src="https://tse4.mm.bing.net/th?id=OIP.TuEmDf5h5sXhRMp500MZFQHaE7&pid=Api&P=0&w=252&h=168"
        alt=""
      />
      <FileInput />
    </div>
  );
};

export default ProfilePic;
