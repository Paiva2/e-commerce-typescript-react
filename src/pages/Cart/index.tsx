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
import { deleteItem } from "../../context/apiMethods";

const Cart = () => {
  const { cartData, loading, setCartData } = useContext(CartContext);

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
                          onClick={() =>
                            deleteItem("cart", product.id, setCartData)
                          }
                          className="icon"
                        />
                      </div>
                    </div>
                  </ProductResume>
                  <ActionsContainer>
                    <p>$ {product.price}</p>
                    <QuantityWrapper>
                      +<p>{product.quantity}</p>-
                    </QuantityWrapper>
                    <p>$ {product.quantity * product.price}</p>
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
