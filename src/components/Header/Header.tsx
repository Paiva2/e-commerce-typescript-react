import { useContext } from "react";
import { BsHeartFill, BsCart } from "react-icons/bs";

import { Link } from "react-router-dom";
import {
  HeaderContainer,
  HeaderWrapper,
  LogoContainer,
  PurchaserContainer,
  SearchContainer,
} from "./styles";
import { ProductsContext } from "../../context/ProductsContext";
import { CartContext } from "../../context/CartContext";
import { WishListContext } from "../../context/WishListContext";

const Header = () => {
  const { setSearchValue } = useContext(ProductsContext);
  const { cartData } = useContext(CartContext);
  const { wishListData } = useContext(WishListContext);

  const cartItemsQuantity = cartData.length ? cartData.length : null;
  const wishListItemsQuantity = wishListData.length ? wishListData.length : null;

  const isQuantityIconsVisible = (quantityIcon: number | null): {} => {
    return quantityIcon ? { opacity: "1", visibility: "1" } : {};
  };

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <LogoContainer>
          <Link to="/">e-Commerce</Link>
        </LogoContainer>
        <SearchContainer>
          <input type="search" onChange={(e) => setSearchValue(e.target.value)} />
        </SearchContainer>
        <PurchaserContainer>
          <div>
            <Link to="/wish-list">
              <BsHeartFill className="wish-list-icon" />
              <span
                style={isQuantityIconsVisible(wishListItemsQuantity)}
                className="wish-quantity"
              >
                {wishListItemsQuantity}
              </span>
            </Link>
            <Link to="/cart">
              <BsCart className="cart-icon" />
              <span
                style={isQuantityIconsVisible(cartItemsQuantity)}
                className="cart-quantity"
              >
                {cartItemsQuantity}
              </span>
            </Link>
          </div>
        </PurchaserContainer>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
