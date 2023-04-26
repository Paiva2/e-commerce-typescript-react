import { useContext, FC } from "react";
import { IProduct } from "../../interfaces/interfaces";
import { ProductsContext } from "../context/ProductsContext";

export const filterProducts = (
  payload: string,
  filterParam: string,
  defaultProducts?: IProduct[]
) => {
  const { data } = useContext(ProductsContext);

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
      return defaultProducts;
  }
};
