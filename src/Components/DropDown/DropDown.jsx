import React from "react";
import "./DropDown.scss";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  select: {
    width: "150px",
  },
}));

const DropDown = ({ value, onChange, required }) => {
  const classes = useStyles();

  return (
    <div className="DropDown">
      <span className="text">You are a :</span>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        onChange={(e) => onChange(e)}
        className={classes.select}
        required={required}
      >
        <MenuItem value="student">Student</MenuItem>
        <MenuItem value="institute">Institute</MenuItem>
      </Select>
    </div>
  );
};

export default DropDown;
