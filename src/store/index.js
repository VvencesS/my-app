import { createStore, applyMiddleware } from 'redux';
import middleware from './middleware';

import combinedReducers from './reducers';

const reducer = (state, action) => {
  return combinedReducers(state, action);
};

const initStore = () => createStore(reducer, {}, applyMiddleware(middleware));

export const wrapper = initStore;