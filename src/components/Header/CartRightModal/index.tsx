import { Dispatch, SetStateAction, useContext } from "react";
import {
  CardLeftSide,
  CardRightSide,
  CartModalContainer,
  CartModalWrapper,
  CartTitle,
  FooterButtons,
  ModalContent,
  PlaceHolderWrapper,
  PriceWrapper,
  ProductCard,
  ProductsAndFooterContainer,
  TotalContainer,
} from "./styles";
import { CartContext } from "../../../context/CartContext";

import { priceFormatter } from "../../../utils/formatter";
import { RiCloseFill } from "react-icons/ri";
import { BsCart } from "react-icons/bs";

import PlaceHolder from "../../../components/PlaceHolder";

interface CartModalProps {
  openCartResume: boolean;
  setOpenCartResume: Dispatch<SetStateAction<boolean>>;
}

const CartRightModal = ({
  openCartResume,
  setOpenCartResume,
}: CartModalProps) => {
  const { cartData } = useContext(CartContext);

  return (
    <CartModalContainer
      onClick={() => setOpenCartResume(false)}
      style={{
        opacity: openCartResume ? 1 : 0,
        visibility: openCartResume ? "visible" : "hidden",
      }}
    >
      <CartModalWrapper
        onClick={(e) => e.stopPropagation()}
        style={{
          opacity: openCartResume ? 1 : 0,
          visibility: openCartResume ? "visible" : "hidden",
          transform: openCartResume ? "translateX(0%)" : "translateX(110%)",
        }}
      >
        <ModalContent>
          <CartTitle>
            <h1>Your Cart Resume</h1>
          </CartTitle>
          <ProductsAndFooterContainer>
            <div>
              {!cartData.length && (
                <PlaceHolderWrapper>
                  <PlaceHolder
                    text="Empty Cart..."
                    color="#00875F"
                    Icon={BsCart}
                  />
                </PlaceHolderWrapper>
              )}
              {cartData.map((product, index) => (
                <ProductCard>
                  <CardLeftSide>
                    <img src={product.image} alt={`Cart Image ${index}`} />
                    <div>
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                    </div>
                  </CardLeftSide>
                  <CardRightSide>
                    <button>
                      <RiCloseFill size={25} />
                    </button>
                    <h3>{priceFormatter.format(product.price)}</h3>
                  </CardRightSide>
                </ProductCard>
              ))}
            </div>
            <TotalContainer>
              <PriceWrapper>
                <h3>Total</h3>
                <h3>$ 5.000</h3>
              </PriceWrapper>
              <FooterButtons pattern="checkoutPattern">
                Continue Shopping
              </FooterButtons>
              <FooterButtons pattern="continueShoppingPatern">
                Go to Checkout
              </FooterButtons>
            </TotalContainer>
          </ProductsAndFooterContainer>
        </ModalContent>
      </CartModalWrapper>
    </CartModalContainer>
  );
};

export default CartRightModal;
