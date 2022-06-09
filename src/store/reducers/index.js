import { combineReducers } from "redux";
import loginReducers from "./login";
import userReducers from "./user";
import categoryReducers from "./category";
import modalReducers from "./modal";
import tableReducers from "./table";

const rootReducer = combineReducers({
  login: loginReducers,
  user: userReducers,
  category: categoryReducers,
  modal: modalReducers,
  table: tableReducers,
});

export default rootReducer;
