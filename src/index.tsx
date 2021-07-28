import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import React from "react";

ReactDOM.render(
  <BrowserRouter basename="/EQ-D">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
