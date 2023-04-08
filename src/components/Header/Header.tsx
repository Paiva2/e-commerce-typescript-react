import React from "react";
import {
  HeaderContainer,
  HeaderWrapper,
  LogoContainer,
  PurchaserContainer,
  SearchContainer,
} from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <LogoContainer>LOGO</LogoContainer>
        <SearchContainer>Search</SearchContainer>
        <PurchaserContainer>
          <div>Wishlist - Cart</div>
        </PurchaserContainer>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
