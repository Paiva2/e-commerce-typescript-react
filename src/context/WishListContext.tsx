import { createContext, useState, useEffect, FC } from "react";
import { Props, wishListDefault, IProduct } from "../../interfaces/interfaces";

import { callApi } from "./apiMethods";

export const WishListContext = createContext(wishListDefault);

const WishListStorage: FC<Props> = ({ children }) => {
  const [wishListData, setWishListData] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    callApi("wish-list", setWishListData, setLoading);
  }, []);

  return (
    <WishListContext.Provider
      value={{ wishListData, loading, setWishListData }}
    >
      {children}
    </WishListContext.Provider>
  );
};

export default WishListStorage;
