import { useCallback, useContext, useState } from "react";
// @ts-ignore
import { Helmet } from "react-helmet";
import {
  AsideContainer,
  MiddleContainer,
  ProductsContainer,
  ProductsWrapper,
  ProductsStyle,
  ProductActionsContainer,
  PriceWrapper,
  IconsWrapper,
  ColorsWrapper,
  ProducsTitleWrapper,
  ProductCardDetails,
  GenreWrapper,
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
import { handleGoToTop } from "../../../utils/GoToTop";

const Products = () => {
  const { data, loading, searchValue, initialPage, finalPage } =
    useContext(ProductsContext);
  const { setCartData } = useContext(CartContext);
  const { setWishListData } = useContext(WishListContext);

  const showSettedItensPerPage = data.slice(initialPage, finalPage);

  const [colorFilter, setColorsFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("");

  const removeDuplicatedColors = () => {
    let colorsAccumulator: Array<string> = [];

    const aSideColorFilters = data.map((info) => info.filterParams.colors);

    aSideColorFilters.map((item) => item.map((color) => colorsAccumulator.push(color)));

    return colorsAccumulator;
  };

  const uniqueColorsForAside = [...new Set(removeDuplicatedColors())];

  const filterProducts = useCallback(
    (payload: string, filterParam: string) => {
      switch (payload) {
        case "SEARCH_PARAMS":
          return data.filter((dataFilter) =>
            dataFilter.name.toLowerCase().includes(filterParam)
          );
        case "COLOR_FILTER":
          return data.filter((dataFilter) =>
            dataFilter.filterParams.colors.includes(filterParam)
          );
        case "GENRE_FILTER":
          return data.filter((dataFilter) =>
            dataFilter.filterParams.genre.includes(filterParam.toLowerCase())
          );
        default:
          return showSettedItensPerPage;
      }
    },
    [searchValue, colorFilter, genreFilter]
  );

  const searchedProductExists =
    filterProducts("SEARCH_PARAMS", searchValue).length > 0 && true;

  const handleDisplayProducts = () => {
    if (searchValue && searchedProductExists) {
      return filterProducts("SEARCH_PARAMS", searchValue);
    }
    if (colorFilter) {
      return filterProducts("COLOR_FILTER", colorFilter);
    }
    if (genreFilter) {
      return filterProducts("GENRE_FILTER", genreFilter);
    }

    return showSettedItensPerPage;
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
        <AsideContainer>
          <GenreWrapper>
            <h2>Genre</h2>
            <ul>
              <div>
                <li onClick={(e) => setGenreFilter(e.currentTarget.innerText)}>Male</li>
                {genreFilter === "Male" && (
                  <IoIosClose onClick={() => setGenreFilter("")} />
                )}
              </div>
              <div>
                <li onClick={(e) => setGenreFilter(e.currentTarget.innerText)}>Female</li>
                {genreFilter === "Female" && (
                  <IoIosClose onClick={() => setGenreFilter("")} />
                )}
              </div>
            </ul>
          </GenreWrapper>

          <div>
            <h2>Color</h2>
            <ul>
              {uniqueColorsForAside.map((color, index) => (
                <ColorsWrapper key={index}>
                  <li onClick={() => setColorsFilter(color)}>{color}</li>
                  <IoIosClose
                    className={colorFilter === color ? "closeVisible" : ""}
                    onClick={() => setColorsFilter("")}
                  />
                </ColorsWrapper>
              ))}
            </ul>
          </div>
        </AsideContainer>
        <ProductsContainer>
          <ProducsTitleWrapper>
            <h1>Products</h1>
          </ProducsTitleWrapper>
          <ProductsWrapper>
            {loading && <h1>Loading...</h1>}
            {data &&
              showProducts.map((product) => {
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
