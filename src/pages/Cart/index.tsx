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
import { deleteItem, editItem } from "../../context/apiMethods";
import { IProduct } from "../../../interfaces/interfaces";

const Cart = () => {
  const { cartData, loading, setCartData } = useContext(CartContext);

  const handleSetQuantity = (
    product: IProduct,
    productId: string,
    operator: string
  ) => {
    switch (operator) {
      case "+":
        editItem("cart", productId, { quantity: product.quantity + 1 }, setCartData);
        break;
      case "-":
        if (product.quantity === 1) return;
        editItem("cart", productId, { quantity: product.quantity - 1 }, setCartData);
        break;
      default:
        console.warn("Invalid operator. Contact admin for support.");
    }
  };

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
                      <button
                        onClick={() => handleSetQuantity(product, product.id, "+")}
                      >
                        +
                      </button>
                      <p>{product.quantity}</p>
                      <button
                        onClick={() => handleSetQuantity(product, product.id, "-")}
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
