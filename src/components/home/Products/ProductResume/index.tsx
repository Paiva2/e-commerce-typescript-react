import {
  useState,
  useContext,
  Dispatch,
  SetStateAction,
  RefObject,
} from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { IProduct } from "../../../../../interfaces/interfaces";

import { BsHeart } from "react-icons/bs";
import { RiArrowDownSLine, RiCloseFill } from "react-icons/ri";

import { CartContext } from "../../../../context/CartContext";
import { WishListContext } from "../../../../context/WishListContext";
import { priceFormatter } from "../../../../utils/formatter";

import {
  AccordionWrapper,
  ActionButton,
  ActionButtonsWrapper,
  CloseButtonWrapper,
  ModalContent,
  ProductDetails,
  ProductImageContainer,
  ProductInformationsContainer,
  ProductInformationsWrapper,
  ProductModalContentContainer,
  SelectProductVariations,
  TriggerButton,
} from "./styles";
import { sendItemToEndPoint } from "../../../../utils/sendItemToEndpoint";
import { ProductsContext } from "../../../../context/ProductsContext";

interface Props {
  singleProduct: IProduct;
  openProductModal: boolean;
  setOpenProductModal: Dispatch<SetStateAction<boolean>>;
  selectRef: RefObject<HTMLSelectElement>;
  resetColorsToDefault: () => void;
}

const ProductResume = ({
  singleProduct,
  openProductModal,
  setOpenProductModal,
  selectRef,
  resetColorsToDefault,
}: Props) => {
  const { setCartData } = useContext(CartContext);
  const { selectedProductColor, setSelectedProductColor } =
    useContext(ProductsContext);
  const { setWishListData } = useContext(WishListContext);

  const handleSendProduct = (
    endpoint: string,
    setData: Dispatch<SetStateAction<IProduct[]>>
  ) => {
    sendItemToEndPoint(endpoint, singleProduct, selectedProductColor, setData);
  };

  return (
    singleProduct && (
      <ProductModalContentContainer>
        <ProductImageContainer>
          <img src={singleProduct?.image} alt={singleProduct?.name} />
        </ProductImageContainer>
        <ProductInformationsContainer>
          <CloseButtonWrapper>
            <button
              onClick={() => {
                setOpenProductModal(!openProductModal), resetColorsToDefault();
              }}
              aria-label="Close"
            >
              <RiCloseFill size={40} />
            </button>
          </CloseButtonWrapper>
          <ProductInformationsWrapper>
            <div>
              <ProductDetails>
                <h1>{singleProduct.name}</h1>
                <h2>{priceFormatter.format(singleProduct?.price)}</h2>
                <p>
                  <b>Genre:</b> {singleProduct.filterParams.genre}
                </p>
              </ProductDetails>
              <SelectProductVariations>
                <b>Available Colors:</b>{" "}
                <select
                  ref={selectRef}
                  onChange={(e) => setSelectedProductColor(e.target.value)}
                >
                  {singleProduct?.filterParams.colors.map((color: string) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </SelectProductVariations>
            </div>
            <ActionButtonsWrapper>
              <ActionButton
                type="cartPattern"
                onClick={() => handleSendProduct("cart", setCartData)}
              >
                Add to Cart
              </ActionButton>
              <ActionButton
                type="wishListPattern"
                onClick={() => handleSendProduct("wish-list", setWishListData)}
              >
                <BsHeart />
              </ActionButton>
            </ActionButtonsWrapper>

            <Accordion.Root type="single" collapsible>
              <AccordionWrapper>
                <Accordion.Item value="item-1">
                  <Accordion.Trigger asChild>
                    <TriggerButton>
                      Description <RiArrowDownSLine />
                    </TriggerButton>
                  </Accordion.Trigger>

                  <ModalContent>
                    <div>
                      <p>Description: {singleProduct?.description}</p>
                    </div>
                  </ModalContent>
                </Accordion.Item>

                <Accordion.Item value="item-2">
                  <Accordion.Trigger asChild>
                    <TriggerButton>
                      Rating <RiArrowDownSLine />
                    </TriggerButton>
                  </Accordion.Trigger>
                  <ModalContent>
                    <div>
                      <p>Rating: {singleProduct?.rating}</p>
                    </div>
                  </ModalContent>
                </Accordion.Item>

                <Accordion.Item value="item-3">
                  <Accordion.Trigger asChild>
                    <TriggerButton>
                      Manufacturing <RiArrowDownSLine />
                    </TriggerButton>
                  </Accordion.Trigger>
                  <ModalContent>
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aut tenetur iste dolor earum animi tempore provident
                        perferendis accusamus laboriosam porro, enim
                        consectetur.
                      </p>
                    </div>
                  </ModalContent>
                </Accordion.Item>

                <Accordion.Item value="item-4">
                  <Accordion.Trigger asChild>
                    <TriggerButton>
                      Material <RiArrowDownSLine />
                    </TriggerButton>
                  </Accordion.Trigger>
                  <ModalContent>
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Harum, nemo accusantium?.
                      </p>
                    </div>
                  </ModalContent>
                </Accordion.Item>
              </AccordionWrapper>
            </Accordion.Root>
          </ProductInformationsWrapper>
        </ProductInformationsContainer>
      </ProductModalContentContainer>
    )
  );
};

export default ProductResume;
