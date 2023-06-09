import ReactDOM from "react-dom/client";
import { globalStyles } from "../config/styles-config";
import MainRoutes from "./pages";
import ProductsContext from "./context/ProductsContext";
import CartContext from "./context/CartContext";
import WishListContext from "./context/WishListContext";

globalStyles();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ProductsContext>
    <WishListContext>
      <CartContext>
        <MainRoutes />
      </CartContext>
    </WishListContext>
  </ProductsContext>
);
