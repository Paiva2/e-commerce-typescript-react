import React from "react";
import ReactDOM from "react-dom/client";
import { globalStyles } from "../config/config";
import MainRoutes from "./pages";

globalStyles();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MainRoutes />
  </React.StrictMode>
);
