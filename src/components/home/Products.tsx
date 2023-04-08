import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  AsideContainer,
  MiddleContainer,
  PageButtonsContainer,
  ProductsContainer,
  ProductsWrapper,
  ProductsStyle,
  ProductActionsContainer,
} from "./styles";

const Products = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [itensPerPage, setItensOnPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const initialPage = currentPage * itensPerPage;
  const finalPage = initialPage + itensPerPage;
  const showItens = data.slice(initialPage, finalPage);
  const totalPages = [...Array(data.length / itensPerPage)];

  interface IProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    rating: number;
    quantity: number;
    colors: Array<string>;
  }

  useEffect(() => {
    axios
      .get<Array<IProduct>>("http://localhost:3000/products")
      .then((res) => res)
      .then((responseJson) => {
        setData(responseJson.data);
        setLoading(false);
      });
  }, []);

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
                    <div>Add to cart - Add wish list</div>
                    <div>
                      <p>{product.price}</p>
                    </div>
                  </ProductActionsContainer>
                </ProductsStyle>
              );
            })}
        </ProductsWrapper>
        <PageButtonsContainer>
          <button onClick={handlePreviousPage}>Prev</button>
          {totalPages.map((_, index) => (
            <button
              key={index}
              className={index === currentPage ? "active" : ""}
              onClick={() => setCurrentPage(index)}
            >
              {index + 1}
            </button>
          ))}
          <button onClick={handleNextPage}>Next</button>
        </PageButtonsContainer>
      </ProductsContainer>
    </MiddleContainer>
  );
};

export default Products;
