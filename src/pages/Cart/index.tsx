import { useContext, useEffect, useState } from "react";
// @ts-ignore
import { Helmet } from "react-helmet";
import {
  ActionsContainer,
  CartContainer,
  CartProducts,
  CartWrapper,
  CheckoutContainer,
  DeleteButtonContainer,
  InputsContainer,
  ProductNameWrapper,
  ProductResume,
  ProductWrapper,
  QuantityWrapper,
  ResumeContainer,
  ResumeTitle,
  ResumeWrapper,
  TotalWrapper,
  UpSideContainer,
} from "../../pages/Cart/styles";

import { AiOutlineDelete } from "react-icons/ai";
import { CartContext } from "../../context/CartContext";
import { deleteItem, editItem } from "../../utils/apiMethods";

import { IProduct } from "../../../interfaces/interfaces";
import PlaceHolder from "../../components/PlaceHolder";
import { BsCart } from "react-icons/bs";

import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { priceFormatter } from "../../utils/formatter";
import { promoCodes } from "./promoCodes";
import { alertMessage } from "../../utils/AlertMessage";
import { Link } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const { cartData, loading, setCartData } = useContext(CartContext);
  const [promoCode, setPromoCode] = useState("");
  const [totalCartValue, setTotalCartValue] = useState(0);
  const [getDiscount, setGetDiscount] = useState(0);

  const handleSetQuantity = (product: IProduct, operator: string) => {
    switch (operator) {
      case "+":
        editItem(
          "cart",
          product.id,
          { quantity: product.quantity + 1 },
          setCartData
        );
        break;
      case "-":
        if (product.quantity === 1) return;
        editItem(
          "cart",
          product.id,
          { quantity: product.quantity - 1 },
          setCartData
        );
        break;
      default:
        console.warn("Invalid action. Contact admin for support.");
    }
  };

  useEffect(() => {
    const totalValueItemsOnCart = cartData.reduce((acc, products) => {
      const totalProducts = products.price * products.quantity;
      return (acc += totalProducts);
    }, 0);

    setTotalCartValue(totalValueItemsOnCart - getDiscount);
  }, [cartData]);

  if (loading) {
    return <h2>loading...</h2>;
  }

  if (cartData.length < 1) {
    return <PlaceHolder text="Empty Cart..." color="#00875F" Icon={BsCart} />;
  }

  const handleInsertPromoCode = () => {
    const getPromoCode = promoCodes.find((code) => code.code === promoCode);

    if (getDiscount > 0) {
      return alertMessage("warning", "A promo code is already beeing used!");
    }

    if (getPromoCode) {
      setTotalCartValue((prevTotal) => {
        const discount = (prevTotal * getPromoCode.discountValue) / 100;
        setGetDiscount(discount);

        setPromoCode("");

        return prevTotal - discount;
      });
    }
  };

  const finishCheckout = () => {
    cartData.forEach((product) => deleteItem("cart", product.id, setCartData));
  };

  const handleRemoveItemFromCart = (id: string) => {
    deleteItem("cart", id, setCartData);

    alertMessage("success", "Product removed.");
  };

  return (
    <>
      <Helmet>
        <title>Cart</title>
        <meta name="cart" content="Cart Component" />
      </Helmet>
      <CartContainer>
        <CartWrapper>
          <UpSideContainer>
            <div>
              <h4>PRODUCT</h4>
            </div>
            <div>
              <h4>PRICE</h4>
              <h4>QUANTITY</h4>
              <h4>TOTAL</h4>
            </div>
          </UpSideContainer>
          <CartProducts>
            {cartData.map((product) => {
              return (
                <ProductWrapper key={product.id}>
                  <ProductResume>
                    <div>
                      <img src={product.image} alt={product.name} />
                    </div>
                    <ProductNameWrapper>
                      <h3>{product.name}</h3>
                      <p>
                        <b>Color: </b>
                        {product.filterParams.colors}
                      </p>
                      <DeleteButtonContainer>
                        <button>
                          <AiOutlineDelete
                            onClick={() => handleRemoveItemFromCart(product.id)}
                            className="icon"
                          />
                        </button>
                      </DeleteButtonContainer>
                    </ProductNameWrapper>
                  </ProductResume>
                  <ActionsContainer>
                    <p>
                      <b>$ {product.price}</b>
                    </p>
                    <QuantityWrapper>
                      <button onClick={() => handleSetQuantity(product, "+")}>
                        <HiPlusSm size={30} />
                      </button>
                      <p>{product.quantity}</p>
                      <button
                        disabled={product.quantity === 1 ? true : false}
                        onClick={() => handleSetQuantity(product, "-")}
                      >
                        <HiMinusSm size={30} />
                      </button>
                    </QuantityWrapper>
                    <p>$ {(product.quantity * product.price).toFixed(2)}</p>
                  </ActionsContainer>
                </ProductWrapper>
              );
            })}
          </CartProducts>
        </CartWrapper>
        <ResumeContainer>
          <ResumeWrapper>
            <ResumeTitle>
              <h2>Cart resume</h2>
            </ResumeTitle>
            <InputsContainer>
              <label>
                Promo Code
                <input
                  type="text"
                  value={promoCode}
                  placeholder="Have a promo code?"
                  onChange={(e) => setPromoCode(e.target.value)}
                />
              </label>
              <label>
                Shipping
                <input
                  disabled={true}
                  placeholder="Insert your zipcode!"
                  type="text"
                />
              </label>
              <button onClick={handleInsertPromoCode}>Confirm</button>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  background: "rgb(32, 32, 36)",
                  borderRadius: "5px",
                  padding: "10px",
                }}
              >
                <h2
                  style={{
                    alignSelf: "center",
                  }}
                >
                  Available Promo's
                </h2>
                {promoCodes.map((code) => {
                  return (
                    <div key={code.id}>
                      <h3>Code: {code.code}</h3>
                      <p>Discount: {code.discountValue}%</p>
                    </div>
                  );
                })}
              </div>
            </InputsContainer>
            <TotalWrapper>
              <div>
                <h2>Total</h2>
                <h2>{priceFormatter.format(totalCartValue)}</h2>
              </div>
            </TotalWrapper>
          </ResumeWrapper>
          <CheckoutContainer>
            <Link to="/success">
              <button onClick={finishCheckout}>Checkout</button>
            </Link>
          </CheckoutContainer>
        </ResumeContainer>
      </CartContainer>
    </>
  );
};

export default Cart;
