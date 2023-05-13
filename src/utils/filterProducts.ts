import { useContext } from "react";
import { IProduct } from "../../interfaces/interfaces";
import { ProductsContext } from "../context/ProductsContext";

export const filterProducts = (
  filterPayload: string,
  filterParam: unknown,
  defaultProducts?: IProduct[]
) => {
  const { data } = useContext(ProductsContext);

  switch (filterPayload) {
    case "FILTER_COLOR_AND_GENRE":
      if (filterParam instanceof Array) {
        const [colorToFilter, genreToFilter] = filterParam;

        return data.filter(
          (dataFilter) =>
            dataFilter.filterParams.colors.includes(colorToFilter) &&
            dataFilter.filterParams.genre.includes(genreToFilter.toLowerCase())
        );
      }

    case "SEARCH_PARAMS":
      if (typeof filterParam === "string") {
        return data.filter((dataFilter) =>
          dataFilter.name.toLowerCase().includes(filterParam)
        );
      }

    case "COLOR_FILTER":
      if (typeof filterParam === "string") {
        return data.filter((dataFilter) =>
          dataFilter.filterParams.colors.includes(filterParam)
        );
      }

    case "GENRE_FILTER":
      if (typeof filterParam === "string") {
        return data.filter((dataFilter) =>
          dataFilter.filterParams.genre.includes(filterParam.toLowerCase())
        );
      }

    case "PRICE_FILTER_MIN":
      if (typeof filterParam === "number") {
        return data.filter((dataFilter) => dataFilter.price >= filterParam);
      }

    case "PRICE_FILTER_MAX":
      if (typeof filterParam === "number") {
        const filteredProducts = data.filter(
          (dataFilter) => dataFilter.price <= filterParam
        );
        if (filteredProducts.length < 1) {
          return defaultProducts;
        }
        return filteredProducts;
      }

    case "PRICE_FILTER_BOTH":
      if (filterParam instanceof Array) {
        const [minPrice, maxPrice] = filterParam;

        return data.filter(
          (dataFilter) =>
            dataFilter.price >= minPrice && dataFilter.price <= maxPrice
        );
      }

    default:
      return defaultProducts;
  }
};
