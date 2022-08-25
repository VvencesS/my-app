import { combineReducers } from "redux";
import loginReducers from "./login";
import userReducers from "./user";
import categoryReducers from "./category";
import modalReducers from "./modal";
import tableReducers from "./table";
import modelTypeReducers from "./modelType";
import modelTypeParamReducers from "./modelTypeParam";
import modelTypeInfoReducers from "./modelTypeInfo";
import { loadingBarReducer } from "react-redux-loading-bar";

const rootReducer = combineReducers({
  login: loginReducers,
  user: userReducers,
  category: categoryReducers,
  modal: modalReducers,
  table: tableReducers,
  modelType: modelTypeReducers,
  modelTypeParam: modelTypeParamReducers,
  modelTypeInfo: modelTypeInfoReducers,
  loadingBar: loadingBarReducer,
});

export default rootReducer;
