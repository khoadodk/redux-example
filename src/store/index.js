import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";

import createSagaMiddleware from "redux-saga";
import apiCall from "../sagas/apiCall";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(thunk, sagaMiddleware))
);

// then run the saga
sagaMiddleware.run(apiCall);

export default store;
