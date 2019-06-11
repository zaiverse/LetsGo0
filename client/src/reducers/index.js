import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import usersReducer from "./usersReducers";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  userInfo: usersReducer
});