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

const Header = () => {
  const { setSearchValue } = useContext(ProductsContext);

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
              <BsHeartFill className="icon" />
            </Link>
            <Link to="/cart">
              <BsCart className="icon" />
            </Link>
          </div>
        </PurchaserContainer>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
