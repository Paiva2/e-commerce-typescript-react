import { useContext } from "react";
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

  const totalCartSum = cartData.reduce((acc, products) => {
    const totalProducts = products.price * products.quantity;
    return (acc += totalProducts);
  }, 0);

  if (loading) {
    return <h2>loading...</h2>;
  }

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
          <UpSideContainer>
            <div>
              <p>PRODUCT</p>
            </div>
            <div>
              <p>PRICE</p>
              <p>QUANTITY</p>
              <p>TOTAL</p>
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
        <div>
          <h2>Total</h2>
          <p>{totalCartSum.toFixed(2)}</p>
        </div>
      </CartContainer>
    </>
  );
};

export default Cart;
