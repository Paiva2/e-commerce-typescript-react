import axios from "axios";
import React, { createContext, useState, useEffect, FC } from "react";

import { Props, defaultContext } from "../interfaces/interfaces";
import { IProduct } from "../interfaces/interfaces";
import { callApi } from "./apiData";

export const CartContext = createContext(defaultContext);

const CartStorage: FC<Props> = ({ children }) => {
  const [data, setData] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    callApi("cart", setData, setLoading);
  }, []);

  return (
    <CartContext.Provider value={{ data, loading }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartStorage;
