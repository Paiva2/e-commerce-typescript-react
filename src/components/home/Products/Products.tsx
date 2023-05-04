import { Dispatch, SetStateAction, useContext, useState } from "react";
// @ts-ignore
import { Helmet } from "react-helmet";
import {
  MiddleContainer,
  ProductsContainer,
  ProductsWrapper,
  ProducsTitleWrapper,
  PriceWrapper,
  ProductRating,
  ProductsCardStyle,
} from "./styles";

import { ProductsContext } from "../../../context/ProductsContext";
import StarIcon from "../../../icons/StarIcon";
import Carousel from "../Carousel";

import GoToTopButton from "../../GoToTopButton";
import ProductsPagination from "./ProductsPagination";

import AsideFilters from "./AsideFilters";
import { filterProducts } from "../../../utils/filterProducts";
import {
  IProduct,
  productBodyDefault,
} from "../../../../interfaces/interfaces";
import ProductModal from "./ProductModal";

const Products = () => {
  const { data, loading, searchValue, initialPage, finalPage } =
    useContext(ProductsContext);
  const [colorFilter, setColorsFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("");
  const [priceFilters, setPriceFilters] = useState([0, 0]);
  const [selectedProduct, setSelectedProduct] =
    useState<IProduct>(productBodyDefault);

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
      <ProductModal
        setOpenProductModal={setOpenProductModal}
        openProductModal={openProductModal}
        selectedProduct={selectedProduct}
      />
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
                  <ProductsCardStyle key={product.id}>
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                    />
                    <footer>
                      <button onClick={() => handleGetSelectedProduct(product)}>
                        Details
                      </button>
                    </footer>
                    <h2>{product.name}</h2>
                    <ProductRating>
                      <StarIcon rating={product.rating} />({product.rating})
                    </ProductRating>
                    <PriceWrapper>
                      <h2>
                        <b>$ {product.price}</b>
                      </h2>
                    </PriceWrapper>
                  </ProductsCardStyle>
                );
              })}
          </ProductsWrapper>
          {!genreFilter && !searchValue && !colorFilter && (
            <ProductsPagination />
          )}
        </ProductsContainer>
      </MiddleContainer>
      <GoToTopButton />
    </>
  );
};

export default Products;
