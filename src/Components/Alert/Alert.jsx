import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import { useSelector } from "react-redux";
import { Slide } from "@material-ui/core";
import { showHideAlert } from "../../redux/Alert/Alert.actions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "max-content",
    position: "absolute",
    maxWidth: "90vw",
    top: "3vh",
    height: "max-content",
    zIndex: 300,

    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export const showAlert = (dispatch, type, msg) => {
  dispatch(showHideAlert(type, msg));
  setTimeout(() => {
    dispatch(showHideAlert());
  }, 3000);
};

function AlertMsg() {
  const classes = useStyles();
  const alert = useSelector((state) => state.alert.alert);

  return (
    <div className={classes.root}>
      {alert.show ? (
        <Slide in={alert.show} direction="right">
          <Alert style severity={alert.type}>
            {alert.msg}
          </Alert>
        </Slide>
      ) : null}
    </div>
  );
}

export default AlertMsg;
