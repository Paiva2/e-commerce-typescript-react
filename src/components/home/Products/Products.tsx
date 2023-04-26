import { useCallback, useContext, useState } from "react";
// @ts-ignore
import { Helmet } from "react-helmet";
import {
  MiddleContainer,
  ProductsContainer,
  ProductsWrapper,
  ProductsStyle,
  ProductActionsContainer,
  IconsWrapper,
  ProducsTitleWrapper,
  ProductCardDetails,
  PriceWrapper,
} from "./styles";
import { BsCartPlus, BsHeart } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";

import { ProductsContext } from "../../../context/ProductsContext";
import { insertItem } from "../../../utils/apiMethods";
import { CartContext } from "../../../context/CartContext";

import { WishListContext } from "../../../context/WishListContext";
import StarIcon from "../../../icons/StarIcon";
import { Link } from "react-router-dom";

import Carousel from "../Carousel";
import GoToTopButton from "../../GoToTopButton";
import ProductsPagination from "../../home/ProductsPagination";
import { handleGoToTop } from "../../../utils/goToTop";
import AsideFilters from "./AsideFilters";
import { filterProducts } from "../../../utils/filterProducts";

const Products = () => {
  const { data, loading, searchValue, initialPage, finalPage } =
    useContext(ProductsContext);
  const { setCartData } = useContext(CartContext);
  const { setWishListData } = useContext(WishListContext);

  const displaySettedProductsPerPage = data.slice(initialPage, finalPage);

  const [colorFilter, setColorsFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("");

  const searchedProductExists = filterProducts("SEARCH_PARAMS", searchValue)!.length > 0;

  const handleDisplayProducts = () => {
    if (searchValue && searchedProductExists) {
      return filterProducts("SEARCH_PARAMS", searchValue, displaySettedProductsPerPage);
    }
    if (colorFilter) {
      return filterProducts("COLOR_FILTER", colorFilter, displaySettedProductsPerPage);
    }
    if (genreFilter) {
      return filterProducts("GENRE_FILTER", genreFilter, displaySettedProductsPerPage);
    }

    return displaySettedProductsPerPage;
  };

  const showProducts = handleDisplayProducts();

  return (
    <>
      <Helmet>
        <title>Home - Products</title>
        <meta name="home" content="Products component" />
      </Helmet>
      <Carousel />
      <MiddleContainer>
        <AsideFilters
          genreFilter={genreFilter}
          colorFilter={colorFilter}
          setGenreFilter={setGenreFilter}
          setColorsFilter={setColorsFilter}
        />
        <ProductsContainer>
          <ProducsTitleWrapper>
            <h1>Products</h1>
          </ProducsTitleWrapper>
          <ProductsWrapper>
            {loading && <h1>Loading...</h1>}
            {data &&
              showProducts?.map((product) => {
                return (
                  <ProductsStyle key={product.id}>
                    <Link onClick={handleGoToTop} to={`/${product.id}`}>
                      <img src={product.image} alt={product.name} loading="lazy" />
                    </Link>
                    <h3>{product.name}</h3>
                    <ProductCardDetails>
                      <span>
                        <StarIcon rating={product.rating} />({product.rating})
                      </span>
                      <Link onClick={handleGoToTop} to={`/${product.id}`}>
                        <button>Details</button>
                      </Link>
                    </ProductCardDetails>
                    <ProductActionsContainer>
                      <IconsWrapper>
                        <button onClick={() => insertItem("cart", product, setCartData)}>
                          <BsCartPlus className="cart-icon" />
                        </button>
                        <button
                          onClick={() =>
                            insertItem("wish-list", product, setWishListData)
                          }
                        >
                          <BsHeart className="wishlist-icon" />
                        </button>
                      </IconsWrapper>
                      <PriceWrapper>
                        <p>$ {product.price}</p>
                      </PriceWrapper>
                    </ProductActionsContainer>
                  </ProductsStyle>
                );
              })}
          </ProductsWrapper>
          {!genreFilter && !searchValue && !colorFilter && <ProductsPagination />}
        </ProductsContainer>
      </MiddleContainer>
      <GoToTopButton />
    </>
  );
};

export default Products;
