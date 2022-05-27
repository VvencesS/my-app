import { combineReducers } from "redux";

import counter from "./counter";
import loginReducers from "./login";

const allReducers = combineReducers({
  counter,
  loginReducers,
  // add more reducers here
});

export default allReducers;
