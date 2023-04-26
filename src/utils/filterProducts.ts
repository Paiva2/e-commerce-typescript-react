import { useContext } from "react";
import { IProduct } from "../../interfaces/interfaces";
import { ProductsContext } from "../context/ProductsContext";

export const filterProducts = (
  payload: string,
  filterParam: string | number[] | number,
  defaultProducts?: IProduct[]
) => {
  const { data } = useContext(ProductsContext);

  switch (payload) {
    case "SEARCH_PARAMS":
      if (typeof filterParam === "string")
        return data.filter((dataFilter) =>
          dataFilter.name.toLowerCase().includes(filterParam)
        );

    case "COLOR_FILTER":
      if (typeof filterParam === "string")
        return data.filter((dataFilter) =>
          dataFilter.filterParams.colors.includes(filterParam)
        );

    case "GENRE_FILTER":
      if (typeof filterParam === "string")
        return data.filter((dataFilter) =>
          dataFilter.filterParams.genre.includes(filterParam.toLowerCase())
        );

    case "PRICE_FILTER_MIN":
      if (typeof filterParam === "number")
        return data.filter((dataFilter) => dataFilter.price >= filterParam);

    case "PRICE_FILTER_MAX":
      if (typeof filterParam === "number")
        return data.filter((dataFilter) => dataFilter.price <= filterParam);

    case "PRICE_FILTER_BOTH":
      if (filterParam instanceof Array) {
        const [min, max] = filterParam;

        return data.filter(
          (dataFilter) => dataFilter.price >= min && dataFilter.price <= max
        );
      }

    default:
      return defaultProducts;
  }
};
