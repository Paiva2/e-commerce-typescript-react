import React from "react";
import { BsHeartFill, BsCart } from "react-icons/bs";

import { Link } from "react-router-dom";
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
