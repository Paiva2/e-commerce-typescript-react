import { createContext, useState, useEffect, FC } from "react";

import { IProduct, Props, productDefault } from "../../interfaces/interfaces";
import { callApi } from "../utils/apiMethods";

export const ProductsContext = createContext(productDefault);

const ProductsStorage: FC<Props> = ({ children }) => {
  const [data, setData] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const [itensPerPage, setItensOnPage] = useState<number>(12);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProductColor, setSelectedProductColor] = useState("");
  const initialPage = currentPage * itensPerPage;
  const finalPage = initialPage + itensPerPage;
  const totalPages: number[] = [
    ...Array(Math.ceil(data.length / itensPerPage)),
  ];

  useEffect(() => {
    callApi("products", setData, setLoading);
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        data,
        loading,
        searchValue,
        currentPage,
        totalPages,
        initialPage,
        finalPage,
        selectedProductColor,
        setSelectedProductColor,
        setSearchValue,
        setCurrentPage,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsStorage;
