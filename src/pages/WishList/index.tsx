import React, { useContext } from "react";
import { WishListContext } from "../../context/WishListContext";
// @ts-ignore
import { Helmet } from "react-helmet";

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
import { deleteItem } from "../../context/apiData";

const WishList = () => {
  const { wishListData, loading, setWishListData } =
    useContext(WishListContext);

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
                      <Paragraph type="description">
                        {product.description}
                      </Paragraph>
                    </div>
                  </ProductResume>
                  <PriceWrapper>
                    <div>
                      <p>$ {product.price}</p>
                    </div>
                    <AiOutlineDelete
                      onClick={() =>
                        deleteItem("wish-list", product.id, setWishListData)
                      }
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
