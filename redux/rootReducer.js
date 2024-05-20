import { combineReducers } from "@reduxjs/toolkit";
import alertReducer from "./features/alertSlice";

const rootReducer = combineReducers({
  alert: alertReducer,
});
export default rootReducer;
