import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

//For react toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./index.scss";

// redux, redux toolkit
import { Provider } from "react-redux";
import store from "reducers/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
