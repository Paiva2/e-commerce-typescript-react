import React, { createContext, useState, useEffect, FC } from "react";

import { Props, cartDefault, IProduct } from "../interfaces/interfaces";
import { callApi } from "./apiData";

export const CartContext = createContext(cartDefault);

const CartStorage: FC<Props> = ({ children }) => {
  const [cartData, setCartData] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    callApi("cart", setCartData, setLoading);
  }, []);

  return (
    <CartContext.Provider value={{ cartData, loading, setCartData }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartStorage;
