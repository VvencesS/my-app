import { combineReducers } from "redux";
import loginReducers from "./login";
import userReducers from "./user";

const rootReducer = combineReducers({
  login: loginReducers,
  user: userReducers,
});

export default rootReducer;
