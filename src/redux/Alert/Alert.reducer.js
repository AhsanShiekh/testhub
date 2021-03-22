const initialState = {
  alert: {
    show: false,
    type: "",
    msg: "",
  },
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_ALERT":
      return {
        ...state,
        alert: {
          ...action.payload,
          show: !state.alert.show,
        },
      };

    default:
      return state;
  }
};

export default alertReducer;
