import { combineReducers } from "@reduxjs/toolkit";
import alertReducer from "./features/AlertSlice";

const rootReducer = combineReducers({
  alert: alertReducer,
});
export default rootReducer;
