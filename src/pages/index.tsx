import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import NotFound from "./NotFound";

import Cart from "./Cart";
import WishList from "./WishList";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import Products from "../components/home/Products/Products";
import ProductResume from "../components/home/Products/ProductResume";
import Success from "./Success";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<Products />} />
        <Route path={"/:id"} element={<ProductResume />} />
        <Route path={"/wish-list"} element={<WishList />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/success"} element={<Success />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default MainRoutes;
