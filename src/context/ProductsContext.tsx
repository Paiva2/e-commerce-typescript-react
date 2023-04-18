import { createContext, useState, useEffect, FC } from "react";

import { IProduct, Props, productDefault } from "../../interfaces/interfaces";
import { callApi } from "./apiMethods";

export const ProductsContext = createContext(productDefault);

const ProductsStorage: FC<Props> = ({ children }) => {
  const [data, setData] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    callApi("products", setData, setLoading);
  }, []);

  return (
    <ProductsContext.Provider
      value={{ data, loading, setSearchValue, searchValue }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsStorage;
