import { combineReducers } from "redux";
import formReducer from "./form/slice";

export default combineReducers({
  form: formReducer,
});
