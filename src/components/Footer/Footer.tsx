import React from "react";
import { CopyrightContainer, FooterContainer, NavContainer } from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <NavContainer>
        <div>
          About
          <ul>
            <li>text 1</li>
            <li>text 2</li>
            <li>text 3</li>
            <li>text 4</li>
            <li>text 5</li>
          </ul>
        </div>
        <div>
          Help
          <ul>
            <li>text 1</li>
            <li>text 2</li>
            <li>text 3</li>
            <li>text 4</li>
            <li>text 5</li>
          </ul>
        </div>
        <div>
          Social Medias
          <div>Medias</div>
        </div>
        <div>
          Payment
          <div>Payments</div>
        </div>
        <div>newsletter</div>
      </NavContainer>
      <CopyrightContainer>Copyright</CopyrightContainer>
    </FooterContainer>
  );
};

export default Footer;
