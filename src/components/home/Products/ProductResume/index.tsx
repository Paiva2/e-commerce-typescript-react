import { useState, useContext, Dispatch, SetStateAction } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { IProduct } from "../../../../../interfaces/interfaces";

import { insertItem } from "../../../../utils/apiMethods";
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

interface Props {
  singleProduct: IProduct;
  openProductModal: boolean;
  setOpenProductModal: Dispatch<SetStateAction<boolean>>;
}

const ProductResume = ({
  singleProduct,
  openProductModal,
  setOpenProductModal,
}: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState("");

  const { setCartData } = useContext(CartContext);
  const { setWishListData } = useContext(WishListContext);

  return (
    singleProduct && (
      <ProductModalContentContainer>
        <ProductImageContainer>
          <img src={singleProduct?.image} alt={singleProduct?.name} />
        </ProductImageContainer>
        <ProductInformationsContainer>
          <CloseButtonWrapper>
            <button
              onClick={() => setOpenProductModal(!openProductModal)}
              aria-label="Close"
            >
              <RiCloseFill size={40} />
            </button>
          </CloseButtonWrapper>
          <ProductInformationsWrapper>
            <div>
              <ProductDetails>
                <h1>{singleProduct.name}</h1>
                <h1>{priceFormatter.format(singleProduct?.price)}</h1>
                <p>
                  <b>Genre:</b> {singleProduct.filterParams.genre}
                </p>
              </ProductDetails>
              <SelectProductVariations>
                <b>Available Colors:</b>{" "}
                <select>
                  {singleProduct?.filterParams.colors.map((color: string) => (
                    <option
                      key={color}
                      onChange={() => setSelectedColor(color)}
                      value={color}
                    >
                      {color}
                    </option>
                  ))}
                </select>
              </SelectProductVariations>
            </div>
            <ActionButtonsWrapper>
              <ActionButton
                type="cartPattern"
                onClick={() => insertItem("cart", singleProduct, setCartData)}
              >
                Add to Cart
              </ActionButton>
              <ActionButton
                type="wishListPattern"
                onClick={() =>
                  insertItem("wish-list", singleProduct, setWishListData)
                }
              >
                <BsHeart size={20} />
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
                      Fabricação <RiArrowDownSLine />
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
