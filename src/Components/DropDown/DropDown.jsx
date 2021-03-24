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

const DropDown = ({ text, value, onChange, required, data }) => {
  const classes = useStyles();

  return (
    <div className="DropDown">
      <span className="text">{text}</span>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        onChange={(e) => onChange(e)}
        className={classes.select}
        required={required}
      >
        {data.map((option) => (
          <MenuItem value={option.value}>{option.text}</MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default DropDown;
