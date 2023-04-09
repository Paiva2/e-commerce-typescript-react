import React, { createContext, useState, useEffect, FC } from "react";

import { IProduct, Props, defaultContext } from "../interfaces/interfaces";
import { callApi } from "./apiData";

export const ProductsContext = createContext(defaultContext);

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
