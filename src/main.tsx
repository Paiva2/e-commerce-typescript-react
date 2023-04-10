import React from "react";
import ReactDOM from "react-dom/client";
import { globalStyles } from "../config/config";
import MainRoutes from "./pages";
import ProductsContext from "./context/ProductsContext";
import CartContext from "./context/CartContext";
import WishListContext from "./context/WishListContext";

globalStyles();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProductsContext>
      <WishListContext>
        <CartContext>
          <MainRoutes />
        </CartContext>
      </WishListContext>
    </ProductsContext>
  </React.StrictMode>
);
