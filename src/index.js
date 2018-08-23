import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import Store from "./stores";
import "./styles.css";

const appStore = Store;
const rootElement = document.getElementById("root");
ReactDOM.render(
  <App
    employeeStore={appStore.employeeStore}
    modalStore={appStore.modalStore}
  />,
  rootElement
);
