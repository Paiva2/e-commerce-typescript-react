import { useContext, useState } from "react";
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

import { ProductsContext } from "../../../context/ProductsContext";
import { insertItem } from "../../../utils/apiMethods";
import { CartContext } from "../../../context/CartContext";

import { WishListContext } from "../../../context/WishListContext";
import StarIcon from "../../../icons/StarIcon";
import { Link } from "react-router-dom";

import Carousel from "../Carousel";
import GoToTopButton from "../../GoToTopButton";
import ProductsPagination from "./ProductsPagination";

import AsideFilters from "./AsideFilters";
import { filterProducts } from "../../../utils/filterProducts";
import { IProduct } from "../../../../interfaces/interfaces";
import ProductModal from "./ProductModal";

const Products = () => {
  const { data, loading, searchValue, initialPage, finalPage } =
    useContext(ProductsContext);
  const { setCartData } = useContext(CartContext);
  const { setWishListData } = useContext(WishListContext);

  const [colorFilter, setColorsFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("");
  const [priceFilters, setPriceFilters] = useState([0, 0]);
  const [selectedProduct, setSelectedProduct] = useState<IProduct>();

  const [openProductModal, setOpenProductModal] = useState(false);

  const displaySettedProductsPerPage = data.slice(initialPage, finalPage);

  const searchedProductExists =
    filterProducts("SEARCH_PARAMS", searchValue)!.length > 0;

  const filterTwoParams = (
    filterPayload: string,
    firstParam: Array<string | number> | string | number,
    secondParam?: Array<string | number> | string | number
  ) => {
    let params: unknown;

    if (firstParam && secondParam) {
      params = [firstParam, secondParam];
    } else {
      params = firstParam;
    }

    return filterProducts(filterPayload, params, displaySettedProductsPerPage);
  };

  const handleDisplayProducts = () => {
    const [minPrice, maxPrice] = priceFilters;

    if (colorFilter && genreFilter) {
      return filterTwoParams(
        "FILTER_COLOR_AND_GENRE",
        colorFilter,
        genreFilter
      );
    }

    if (minPrice && maxPrice) {
      return filterTwoParams("PRICE_FILTER_BOTH", priceFilters);
    }

    if (minPrice) {
      return filterProducts(
        "PRICE_FILTER_MIN",
        priceFilters[0],
        displaySettedProductsPerPage
      );
    }

    if (maxPrice) {
      return filterProducts(
        "PRICE_FILTER_MAX",
        priceFilters[1],
        displaySettedProductsPerPage
      );
    }

    if (searchValue && searchedProductExists) {
      return filterProducts(
        "SEARCH_PARAMS",
        searchValue,
        displaySettedProductsPerPage
      );
    }

    if (colorFilter) {
      return filterProducts(
        "COLOR_FILTER",
        colorFilter,
        displaySettedProductsPerPage
      );
    }

    if (genreFilter) {
      return filterProducts(
        "GENRE_FILTER",
        genreFilter,
        displaySettedProductsPerPage
      );
    }

    return displaySettedProductsPerPage;
  };

  const handleGetSelectedProduct = (product: IProduct) => {
    setOpenProductModal(true);

    setSelectedProduct(product);
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
          priceFilters={priceFilters}
          setGenreFilter={setGenreFilter}
          setColorsFilter={setColorsFilter}
          setPriceFilters={setPriceFilters}
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
                    <Link>
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                      />
                    </Link>
                    <h3>{product.name}</h3>
                    <ProductCardDetails>
                      <span>
                        <StarIcon rating={product.rating} />({product.rating})
                      </span>
                      <button onClick={() => handleGetSelectedProduct(product)}>
                        Details
                      </button>
                    </ProductCardDetails>
                    <ProductActionsContainer>
                      <IconsWrapper>
                        <button
                          onClick={() =>
                            insertItem("cart", product, setCartData)
                          }
                        >
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
          {!genreFilter && !searchValue && !colorFilter && (
            <ProductsPagination />
          )}
        </ProductsContainer>
      </MiddleContainer>
      <GoToTopButton />
      <ProductModal
        setOpenProductModal={setOpenProductModal}
        openProductModal={openProductModal}
        selectedProduct={selectedProduct}
      />
    </>
  );
};

export default Products;
