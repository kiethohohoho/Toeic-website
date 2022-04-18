import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

//For react toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "styles/index.scss";

// redux, redux toolkit
import { Provider } from "react-redux";
import configureStore from "reducers/store";

ReactDOM.render(
  // <React.StrictMode>
  <>
    <Provider store={configureStore}>
      <App />
    </Provider>
    <ToastContainer />
  </>,
  // </React.StrictMode>,
  document.getElementById("root")
);
