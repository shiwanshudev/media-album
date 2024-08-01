import { createRoot } from "react-dom/client";
import App from "./App";
import React from "react";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";

const el = document.querySelector("#root");
createRoot(el).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
