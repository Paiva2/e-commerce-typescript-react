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
import { deleteItem } from "../../../utils/apiMethods";
import { useNavigate } from "react-router-dom";
import { alertMessage } from "../../../utils/AlertMessage";
import { handleGoToTop } from "../../../utils/handleGoToTop";

interface CartModalProps {
  openCartResume: boolean;
  setOpenCartResume: Dispatch<SetStateAction<boolean>>;
}

const CartRightModal = ({
  openCartResume,
  setOpenCartResume,
}: CartModalProps) => {
  const { cartData, setCartData } = useContext(CartContext);

  const navigate = useNavigate();

  const totalCartValue = cartData.reduce((acc, product) => {
    return (acc += product.price);
  }, 0);

  const handleGoToCheckout = () => {
    navigate("/cart");
    setOpenCartResume(false);

    handleGoToTop();
  };

  const handleRemoveProduct = (id: string) => {
    deleteItem("cart", id, setCartData);

    alertMessage("success", "Product removed.");
  };

  const modalOpacity = openCartResume ? 1 : 0;
  const modalVisibility = openCartResume ? "visible" : "hidden";
  const modalTransform = openCartResume ? "translateX(0%)" : "translateX(110%)";

  return (
    <CartModalContainer
      onClick={() => setOpenCartResume(false)}
      style={{
        opacity: modalOpacity,
        visibility: modalVisibility,
      }}
    >
      <CartModalWrapper
        onClick={(e) => e.stopPropagation()}
        style={{
          opacity: modalOpacity,
          visibility: modalVisibility,
          transform: modalTransform,
        }}
      >
        <ModalContent>
          <CartTitle>
            <div>
              <h1>Your Cart Resume</h1>
            </div>
            <button>
              <RiCloseFill onClick={() => setOpenCartResume(false)} size={35} />
            </button>
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
                <ProductCard key={product.id}>
                  <CardLeftSide>
                    <img src={product.image} alt={`Cart Image ${index}`} />
                    <div>
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                    </div>
                  </CardLeftSide>
                  <CardRightSide>
                    <button>
                      <RiCloseFill
                        onClick={() => handleRemoveProduct(product.id)}
                        size={25}
                      />
                    </button>
                    <h3>{priceFormatter.format(product.price)}</h3>
                  </CardRightSide>
                </ProductCard>
              ))}
            </div>
            <TotalContainer>
              <PriceWrapper>
                <h3>Total</h3>
                <h3>{priceFormatter.format(totalCartValue)}</h3>
              </PriceWrapper>
              <FooterButtons
                onClick={() => setOpenCartResume(false)}
                pattern="continueShoppingPatern"
              >
                Continue Shopping
              </FooterButtons>
              <FooterButtons
                onClick={handleGoToCheckout}
                pattern="checkoutPattern"
              >
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
