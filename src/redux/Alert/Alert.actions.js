export const showHideAlert = (type, msg) => ({
  type: "SHOW_ALERT",
  payload: { type, msg },
});
