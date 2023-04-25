import { useContext, useState } from "react";
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

  const showItens = data.slice(initialPage, finalPage);
  const searchParams = searchValue.toLowerCase();

  const [colorFilter, setColorsFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("");

  const getUniqueColors = () => {
    let colorsAccumulator: string[] = [];

    const aSideColorFilters = data.map((info) => info.filterParams.colors);

    aSideColorFilters.map((item) => item.map((color) => colorsAccumulator.push(color)));

    return colorsAccumulator;
  };

  const uniqueColorsForAside = [...new Set(getUniqueColors())];

  const handleGetSelectedColor = (firstFilterParam: string) => {
    let filtersAccumulator = [];

    filtersAccumulator.push(firstFilterParam).toString;

    setColorsFilter(filtersAccumulator[0]);
  };

  const handleGetSelectedGenre = (e: React.MouseEvent<HTMLLIElement>) => {
    setGenreFilter(e.currentTarget.innerText);
  };

  const handleDisplaySelectedGenreProducts = (filterParam: string) => {
    return data.filter((dataFilter) =>
      dataFilter.filterParams.genre.includes(filterParam.toLowerCase())
    );
  };

  const handleDisplaySearchedProducts = (filterParam: string) => {
    return data.filter((dataFilter) =>
      dataFilter.name.toLowerCase().includes(filterParam)
    );
  };

  const searchedProductExists =
    handleDisplaySearchedProducts(searchParams).length > 0 ? true : false;

  const handleDisplaySelectedColorProducts = (colorFilterParam: string) => {
    return data.filter((dataFilter) =>
      dataFilter.filterParams.colors.includes(colorFilterParam)
    );
  };

  const handleClearColorFilter = () => {
    setColorsFilter("");
  };

  const handleClearGenreFilter = () => {
    setGenreFilter("");
  };

  const showProducts =
    searchValue && searchedProductExists
      ? handleDisplaySearchedProducts(searchParams)
      : colorFilter
      ? handleDisplaySelectedColorProducts(colorFilter)
      : genreFilter
      ? handleDisplaySelectedGenreProducts(genreFilter)
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
          <GenreWrapper>
            <h2>Genre</h2>
            <ul>
              <div>
                <li onClick={handleGetSelectedGenre}>Male</li>
                {genreFilter === "Male" && (
                  <IoIosClose
                    className="close-visible"
                    onClick={handleClearGenreFilter}
                  />
                )}
              </div>
              <div>
                <li onClick={handleGetSelectedGenre}>Female</li>
                {genreFilter === "Female" && (
                  <IoIosClose
                    className="close-visible"
                    onClick={handleClearGenreFilter}
                  />
                )}
              </div>
            </ul>
          </GenreWrapper>

          <div>
            <h2>Color</h2>
            <ul>
              {uniqueColorsForAside.map((color, index) => (
                <ColorsWrapper key={index}>
                  <li onClick={() => handleGetSelectedColor(color)}>{color}</li>
                  <IoIosClose
                    className={colorFilter === color ? "closeVisible" : ""}
                    onClick={handleClearColorFilter}
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
