import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../node_modules/bulma/css/bulma.min.css";
import axios from "axios";
import App from "./App";

axios.defaults.baseURL = "https://sqledit.herokuapp.com";
axios.defaults.withCredentials = true;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
