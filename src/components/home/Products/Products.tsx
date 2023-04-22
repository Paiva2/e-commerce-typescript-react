import { useState, useContext } from "react";
// @ts-ignore
import { Helmet } from "react-helmet";
import {
  AsideContainer,
  MiddleContainer,
  PageButtonsContainer,
  ProductsContainer,
  ProductsWrapper,
  ProductsStyle,
  ProductActionsContainer,
  PriceWrapper,
  IconsWrapper,
  ProductsButtons,
  ArrowButtons,
} from "./styles";

import {
  BsCartPlus,
  BsHeart,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import { ProductsContext } from "../../../context/ProductsContext";
import { insertItem } from "../../../context/apiMethods";
import { CartContext } from "../../../context/CartContext";

import { WishListContext } from "../../../context/WishListContext";
import StarIcon from "../../../icons/StarIcon";
import { Link } from "react-router-dom";
import Carousel from "../Carousel";
import GoToTopButton from "../../GoToTopButton";

const Products = () => {
  const { data, loading, searchValue } = useContext(ProductsContext);
  const { setCartData } = useContext(CartContext);
  const { setWishListData } = useContext(WishListContext);

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

  const searchParams = searchValue.toLowerCase();
  const showProducts = searchValue
    ? data.filter(({ name }) => name.toLowerCase().includes(searchParams))
    : showItens;

  return (
    <>
      <Helmet>
        <title>Home - Products</title>
        <meta name="home" content="Products component" />
      </Helmet>
      <Carousel />
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
              showProducts.map((product) => {
                return (
                  <ProductsStyle key={product.id}>
                    <Link to={`/${product.id}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                      />
                    </Link>
                    <p>{product.name}</p>
                    <span>
                      <StarIcon rating={product.rating} />
                    </span>
                    <ProductActionsContainer>
                      <IconsWrapper>
                        <BsCartPlus
                          className="cart-icon"
                          onClick={() =>
                            insertItem("cart", product, setCartData)
                          }
                        />
                        <BsHeart
                          className="wishlist-icon"
                          onClick={() =>
                            insertItem("wish-list", product, setWishListData)
                          }
                        />
                      </IconsWrapper>
                      <PriceWrapper>
                        <p>$ {product.price}</p>
                      </PriceWrapper>
                    </ProductActionsContainer>
                  </ProductsStyle>
                );
              })}
          </ProductsWrapper>
          <PageButtonsContainer>
            <ArrowButtons onClick={handlePreviousPage}>
              <BsArrowLeftShort />
            </ArrowButtons>
            {totalPages.map((_, index) => (
              <ProductsButtons
                key={index}
                className={index === currentPage ? "active" : ""}
                onClick={() => setCurrentPage(index)}
              >
                {index + 1}
              </ProductsButtons>
            ))}
            <ArrowButtons onClick={handleNextPage}>
              <BsArrowRightShort />
            </ArrowButtons>
          </PageButtonsContainer>
        </ProductsContainer>
      </MiddleContainer>
      <GoToTopButton />
    </>
  );
};

export default Products;
