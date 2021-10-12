import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { BrowserRouter } from 'react-router-dom';
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import store from "./redux/configStore";

export const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
