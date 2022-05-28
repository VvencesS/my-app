import { configureStore } from "@reduxjs/toolkit";

import counter from "./reducers/counter";
import login from "./reducers/login";

export default configureStore({
  reducer: {
    counter,
    login,
  },
});
