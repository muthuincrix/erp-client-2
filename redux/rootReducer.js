import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './features/stateCheckSlice';


const rootReducer = combineReducers({
    counter: counterReducer,
  });
  export default rootReducer;