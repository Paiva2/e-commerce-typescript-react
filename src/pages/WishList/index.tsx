import React, { useContext } from "react";
import { WishListContext } from "../../context/WishListContext";
// @ts-ignore
import { Helmet } from "react-helmet";
import { BsCartPlus } from "react-icons/bs";

import { AiOutlineDelete } from "react-icons/ai";
import {
  Paragraph,
  PriceWrapper,
  ProductContainer,
  ProductResume,
  ProductWrapper,
  UpSideContainer,
  WishListContainer,
  WishListWrapper,
} from "./styles";
import { deleteItem, insertItem } from "../../utils/apiMethods";

import { CartContext } from "../../context/CartContext";
import { IProduct } from "../../../interfaces/interfaces";
import { FaHeart } from "react-icons/fa";
import PlaceHolder from "../../components/PlaceHolder";

const WishList = () => {
  const { wishListData, loading, setWishListData } = useContext(WishListContext);

  const { setCartData } = useContext(CartContext);

  const handleSendWishItemToCart = (product: IProduct) => {
    insertItem("cart", product, setCartData);
  };

  const handleDeleteItemFromWishList = (product: IProduct) => {
    deleteItem("wish-list", product.id, setWishListData);
  };

  if (wishListData.length < 1) {
    return <PlaceHolder text="Empty Wish List..." color="#C02121" Icon={FaHeart} />;
  }

  return (
    <>
      <Helmet>
        <title>Wish List</title>
        <meta name="wish-list" content="Wish List component" />
      </Helmet>
      <WishListContainer>
        <WishListWrapper>
          {loading && <h1>Loading...</h1>}
          <UpSideContainer>
            <div>
              <p>product</p>
            </div>
            <div>
              <p>price</p>
            </div>
          </UpSideContainer>
          <ProductContainer>
            {wishListData.map((product) => {
              return (
                <ProductWrapper>
                  <ProductResume>
                    <div>
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div>
                      <Paragraph type="titleProduct">{product.name}</Paragraph>
                      <Paragraph type="description">{product.description}</Paragraph>
                    </div>
                  </ProductResume>
                  <PriceWrapper>
                    <div>
                      <p>$ {product.price}</p>
                    </div>
                    <BsCartPlus
                      className="icon"
                      onClick={() => handleSendWishItemToCart(product)}
                    />
                    <AiOutlineDelete
                      onClick={() => handleDeleteItemFromWishList(product)}
                      className="icon"
                    />
                  </PriceWrapper>
                </ProductWrapper>
              );
            })}
          </ProductContainer>
        </WishListWrapper>
      </WishListContainer>
    </>
  );
};

export default WishList;
