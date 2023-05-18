import { useState } from "react";
import { setRecentAddedProductsSchema } from "./carouselSchema";
import {
  ButtonsWrapper,
  CarouselContainer,
  CarouselItem,
  CarouselTitle,
  CarouselWrapper,
  ProductCard,
  ProductCardFooter,
  ProductImageWrapper,
} from "./styles";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { priceFormatter } from "../../../utils/formatter";
import { IProduct } from "../../../../interfaces/interfaces";

interface ProductsCarouselProps {
  getProduct: (product: IProduct) => void;
}

const ProductsCarousel = ({ getProduct }: ProductsCarouselProps) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const lastAddedProducts = setRecentAddedProductsSchema();

  const slideLength = lastAddedProducts.length;

  const handleUpdateSlide = (newIndex: number) => {
    if (newIndex < 0 || newIndex >= slideLength) {
      return;
    }

    setCurrentPosition(newIndex);
  };

  return (
    <CarouselContainer>
      <CarouselTitle>
        <h2>Recently added</h2>
      </CarouselTitle>
      <CarouselWrapper>
        <CarouselItem
          style={{
            transform: `translateX(-${currentPosition * 100}%)`,
          }}
        >
          {lastAddedProducts[0].firstPage?.map((firstPageProduct) => {
            return (
              <ProductCard>
                <ProductImageWrapper>
                  <img src={firstPageProduct.image} />
                </ProductImageWrapper>
                <ProductCardFooter>
                  <p>{firstPageProduct.name}</p>
                  <button onClick={() => getProduct(firstPageProduct)}>
                    Details
                  </button>
                </ProductCardFooter>
              </ProductCard>
            );
          })}
        </CarouselItem>

        <CarouselItem
          style={{
            transform: `translateX(-${currentPosition * 100}%)`,
          }}
        >
          {lastAddedProducts[1].secondPage?.map((secondPageProduct) => {
            return (
              <ProductCard>
                <ProductImageWrapper>
                  <img src={secondPageProduct.image} />
                </ProductImageWrapper>
                <ProductCardFooter>
                  <p>{secondPageProduct.name}</p>
                  <button onClick={() => getProduct(secondPageProduct)}>
                    Details
                  </button>
                </ProductCardFooter>
              </ProductCard>
            );
          })}
        </CarouselItem>
      </CarouselWrapper>
      <ButtonsWrapper>
        <button
          onClick={() =>
            handleUpdateSlide(currentPosition < 0 ? 0 : currentPosition - 1)
          }
        >
          <MdKeyboardArrowLeft size={25} />
        </button>
        <button
          onClick={() =>
            handleUpdateSlide(
              currentPosition === slideLength
                ? slideLength
                : currentPosition + 1
            )
          }
        >
          <MdKeyboardArrowRight size={25} />
        </button>
      </ButtonsWrapper>
    </CarouselContainer>
  );
};

export default ProductsCarousel;
