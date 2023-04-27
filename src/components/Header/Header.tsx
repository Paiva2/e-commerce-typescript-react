import { useContext, useState } from "react";
import { BsHeartFill, BsCart } from "react-icons/bs";
import { BiSearch, BiStore } from "react-icons/bi";

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
import { handleGoToTop } from "../../utils/goToTop";
import CartRightModal from "./CartRightModal";

const Header = () => {
  const { setSearchValue } = useContext(ProductsContext);
  const { cartData } = useContext(CartContext);
  const { wishListData } = useContext(WishListContext);

  const [openCartResume, setOpenCartResume] = useState(false);

  const cartItemsQuantity = cartData.length ? cartData.length : null;
  const wishListItemsQuantity = wishListData.length
    ? wishListData.length
    : null;

  const isQuantityIconsVisible = (quantityIcon: number | null): {} => {
    return quantityIcon ? { opacity: "1", visibility: "visible" } : {};
  };

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <LogoContainer>
          <Link to="/">
            <p>
              <span>JVP</span> Store
            </p>
            <BiStore />
          </Link>
        </LogoContainer>
        <SearchContainer>
          <label>
            <BiSearch />
          </label>
          <input
            type="search"
            onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
          />
        </SearchContainer>
        <PurchaserContainer>
          <div>
            <Link onClick={handleGoToTop} to="/wish-list">
              <BsHeartFill className="wish-list-icon" />
              <span
                style={isQuantityIconsVisible(wishListItemsQuantity)}
                className="wish-quantity"
              >
                {wishListItemsQuantity}
              </span>
            </Link>
            <Link to="#">
              <BsCart
                onClick={() => setOpenCartResume(!openCartResume)}
                className="cart-icon"
              />
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
      <CartRightModal
        setOpenCartResume={setOpenCartResume}
        openCartResume={openCartResume}
      />
    </HeaderContainer>
  );
};

export default Header;
