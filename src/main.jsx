import { createRoot } from "react-dom/client";
import App from "./App";
import React from "react";

const el = document.querySelector("#root");
createRoot(el).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
