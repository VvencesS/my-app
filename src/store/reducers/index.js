import { combineReducers } from "redux";
import loginReducers from "./login";
import userReducers from "./user";
import categoryReducers from "./category";

const rootReducer = combineReducers({
  login: loginReducers,
  user: userReducers,
  category: categoryReducers,
});

export default rootReducer;
