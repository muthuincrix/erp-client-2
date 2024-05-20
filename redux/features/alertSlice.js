import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "alert",
  initialState: {
    title: "",
    message: "",
    open: false,
    severity: "",
    autoHideDuration: 3000,
    action: null,
    actionText: "",
    actionOnClick: null,
    actionColor: "primary",
    disableAutoHide: false,
    disableClose: false,
    disableAction: false,
    disableBackdropClick: false,
  },
  reducers: {
    setAlert: (state, action) => {
      state.title = action.payload.title;
      state.message = action.payload.message;
      state.open = action.payload.open;
      state.severity = action.payload.severity;
      state.autoHideDuration = action.payload.autoHideDuration;
      state.action = action.payload.action;
      state.actionText = action.payload.actionText;
      state.actionOnClick = action.payload.actionOnClick;
      state.actionColor = action.payload.actionColor;
      state.disableAutoHide = action.payload.disableAutoHide;
      state.disableClose = action.payload.disableClose;
      state.disableAction = action.payload.disableAction;
      state.disableBackdropClick = action.payload.disableBackdropClick;
    },
    setInitial: (state) => {
      state.title = "";
      state.message = "";
      state.open = false;
      state.severity = "";
      state.autoHideDuration = 3000;
      state.action = null;
      state.actionText = "";
      state.actionOnClick = null;
      state.actionColor = "primary";
      state.disableAutoHide = false;
      state.disableClose = false;
      state.disableAction = false;
      state.disableBackdropClick = false;
    },
  },
});
export const { setAlert, setInitial } = alertSlice.actions;
export default alertSlice.reducer;
