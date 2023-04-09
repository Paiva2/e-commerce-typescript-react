import React, { createContext, useState, useEffect, FC } from "react";

import { IProduct, Props, productDefault } from "../interfaces/interfaces";
import { callApi } from "./apiData";

export const ProductsContext = createContext(productDefault);

const ProductsStorage: FC<Props> = ({ children }) => {
  const [data, setData] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    callApi("products", setData, setLoading);
  }, []);

  return (
    <ProductsContext.Provider value={{ data, loading }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsStorage;
