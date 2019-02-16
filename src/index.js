import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import rootReducer from "./reducers";
import "./styles.css";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const middleWares = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleWares));

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
