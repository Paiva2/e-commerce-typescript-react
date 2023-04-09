import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import {
  AsideContainer,
  MiddleContainer,
  PageButtonsContainer,
  ProductsContainer,
  ProductsWrapper,
  ProductsStyle,
  ProductActionsContainer,
} from "./styles";
import {
  BsCartPlus,
  BsHeart,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { ProductsContext } from "../../../context/ProductsContext";
import { IProduct } from "../../../interfaces/interfaces";
import { insertItem } from "../../../context/apiData";
import { CartContext } from "../../../context/CartContext";

const Products = () => {
  const { data, loading } = useContext(ProductsContext);
  const { setCartData } = useContext(CartContext);

  const [itensPerPage, setItensOnPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState(0);
  const initialPage = currentPage * itensPerPage;
  const finalPage = initialPage + itensPerPage;
  const showItens = data.slice(initialPage, finalPage);
  const totalPages = [...Array(data.length / itensPerPage)];

  const handlePreviousPage = () => {
    if (currentPage <= 0) return;

    setCurrentPage((oldVal) => oldVal - 1);
  };

  const handleNextPage = () => {
    if (currentPage + 1 >= totalPages.length) return;

    setCurrentPage((oldVal) => oldVal + 1);
  };

  return (
    <MiddleContainer>
      <AsideContainer>
        <div>Genre</div>
        <div>Price</div>
      </AsideContainer>
      <ProductsContainer>
        <h1>Products</h1>
        <ProductsWrapper>
          {loading && <h1>Loading...</h1>}
          {data &&
            showItens.map((product) => {
              return (
                <ProductsStyle key={product.id}>
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <p>{product.name}</p>
                  <span>{product.rating}</span>
                  <ProductActionsContainer>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <BsCartPlus
                        className="icon"
                        onClick={() => insertItem("cart", product, setCartData)}
                      />
                      <BsHeart className="icon" />
                    </div>
                    <div>
                      <p>$ {product.price}</p>
                    </div>
                  </ProductActionsContainer>
                </ProductsStyle>
              );
            })}
        </ProductsWrapper>
        <PageButtonsContainer>
          <button onClick={handlePreviousPage}>
            <BsArrowLeftShort />
          </button>
          {totalPages.map((_, index) => (
            <button
              key={index}
              className={index === currentPage ? "active" : ""}
              onClick={() => setCurrentPage(index)}
            >
              {index + 1}
            </button>
          ))}
          <button onClick={handleNextPage}>
            <BsArrowRightShort />
          </button>
        </PageButtonsContainer>
      </ProductsContainer>
    </MiddleContainer>
  );
};

export default Products;
