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

const DropDown = (props) => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="DropDown">
      <span className="text">You are a :</span>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        onChange={handleChange}
        className={classes.select}
      >
        <MenuItem value={10}>Student</MenuItem>
        <MenuItem value={20}>Institute</MenuItem>
      </Select>
    </div>
  );
};

export default DropDown;
