import { applyMiddleware, combineReducers, compose, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import loginReducers from "./reducers/login";

const configureStore = () => {
  const middlewares = [thunk];
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancers = composeEnhancers(applyMiddleware(...middlewares));
  
  const store = createStore(
    combineReducers({ login: loginReducers }),
    enhancers
  );

  return store;
};

export default configureStore;
