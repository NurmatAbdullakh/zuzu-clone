import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { combineReducers, createStore } from "redux";
import App from "./App";
import "./index.css";
import { productsReducer } from "./redux/productsReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
const reducers = combineReducers({ products: productsReducer });
const store = createStore(
  reducers
  // +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
