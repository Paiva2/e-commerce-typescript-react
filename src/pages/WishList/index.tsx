import { useContext } from "react";
import { WishListContext } from "../../context/WishListContext";
// @ts-ignore
import { Helmet } from "react-helmet";
import { BsCartPlus } from "react-icons/bs";

import { RiCloseFill } from "react-icons/ri";
import {
  ActionsWrapper,
  Paragraph,
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
import { alertMessage } from "../../utils/AlertMessage";
import LoadingCircle from "../../components/LoadingCircle";

const WishList = () => {
  const { wishListData, loading, setWishListData } =
    useContext(WishListContext);

  const { setCartData } = useContext(CartContext);

  const handleSendWishItemToCart = (product: IProduct) => {
    insertItem("cart", product, setCartData);
  };

  const handleDeleteItemFromWishList = (product: IProduct) => {
    deleteItem("wish-list", product.id, setWishListData);

    alertMessage("success", "Product removed.");
  };

  if (loading) {
    return <LoadingCircle />;
  }

  if (wishListData.length < 1) {
    return (
      <PlaceHolder text="Empty Wish List..." color="#C02121" Icon={FaHeart} />
    );
  }

  return (
    <>
      <Helmet>
        <title>Wish List</title>
        <meta name="wish-list" content="Wish List component" />
      </Helmet>
      <WishListContainer>
        <WishListWrapper>
          <UpSideContainer>
            <div>
              <p>PRODUCT</p>
            </div>
            <div>
              <p>PRICE</p>
            </div>
          </UpSideContainer>
          <ProductContainer>
            {wishListData.map((product) => {
              return (
                <ProductWrapper key={product.id}>
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
                  <ActionsWrapper>
                    <div>
                      <p>$ {product.price}</p>
                      <div>
                        <button
                          className="icon"
                          onClick={() => handleSendWishItemToCart(product)}
                        >
                          <BsCartPlus />
                        </button>
                      </div>
                    </div>
                    <RiCloseFill
                      onClick={() => handleDeleteItemFromWishList(product)}
                      className="close-icon"
                    />
                  </ActionsWrapper>
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
