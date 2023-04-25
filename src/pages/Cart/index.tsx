import React, { useContext } from "react";
// @ts-ignore
import { Helmet } from "react-helmet";
import {
  ActionsContainer,
  CartContainer,
  CartProducts,
  CartWrapper,
  ProductResume,
  ProductWrapper,
  QuantityWrapper,
  UpSideContainer,
} from "../../pages/Cart/styles";

import { AiOutlineDelete } from "react-icons/ai";
import { CartContext } from "../../context/CartContext";
import { deleteItem, editItem } from "../../utils/apiMethods";
import { IProduct } from "../../../interfaces/interfaces";
import PlaceHolder from "../../components/PlaceHolder";
import { BsCart } from "react-icons/bs";

const Cart = () => {
  const { cartData, loading, setCartData } = useContext(CartContext);

  const handleSetQuantity = (product: IProduct, operator: string) => {
    switch (operator) {
      case "+":
        editItem("cart", product.id, { quantity: product.quantity + 1 }, setCartData);
        break;
      case "-":
        if (product.quantity === 1) return;
        editItem("cart", product.id, { quantity: product.quantity - 1 }, setCartData);
        break;
      default:
        console.warn("Invalid operator. Contact admin for support.");
    }
  };

  if (cartData.length < 1) {
    return <PlaceHolder text="Empty Cart..." color="#00875F" Icon={BsCart} />;
  }

  return (
    <>
      <Helmet>
        <title>Cart</title>
        <meta name="cart" content="Cart Component" />
      </Helmet>
      <CartContainer>
        <CartWrapper>
          {loading && <h1>Loading...</h1>}
          <UpSideContainer>
            <div>
              <p>product</p>
            </div>
            <div>
              <p>price</p>
              <p>quantity</p>
              <p>total</p>
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
                    <div>
                      <p>{product.name}</p>
                      <p>{product.description}</p>
                      <div>
                        <AiOutlineDelete
                          onClick={() => deleteItem("cart", product.id, setCartData)}
                          className="icon"
                        />
                      </div>
                    </div>
                  </ProductResume>
                  <ActionsContainer>
                    <p>$ {product.price}</p>
                    <QuantityWrapper>
                      <button onClick={() => handleSetQuantity(product, "+")}>+</button>
                      <p>{product.quantity}</p>
                      <button
                        disabled={product.quantity === 1 ? true : false}
                        onClick={() => handleSetQuantity(product, "-")}
                      >
                        -
                      </button>
                    </QuantityWrapper>
                    <p>$ {(product.quantity * product.price).toFixed(2)}</p>
                  </ActionsContainer>
                </ProductWrapper>
              );
            })}
          </CartProducts>
        </CartWrapper>
      </CartContainer>
    </>
  );
};

export default Cart;
