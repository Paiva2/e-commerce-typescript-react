import React from "react";
import ReactDOM from "react-dom/client";
import { globalStyles } from "../config/config";
import Header from "./components/Header/Header";
import Products from "./components/home/Products";
import Footer from "./components/Footer/Footer";

globalStyles();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <Products />
    <Footer />
  </React.StrictMode>
);
