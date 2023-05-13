import { useState } from "react";
import { setRecentAddedProductsSchema } from "./carouselSchema";
import {
  CarouselContainer,
  CarouselItem,
  CarouselWrapper,
  ProductCard,
  ProductCardFooter,
  ProductImageWrapper,
} from "./styles";

const ProductsCarousel = () => {
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
      <h2>New Products</h2>
      <CarouselWrapper>
        <CarouselItem
          style={{
            transform: `translateX(-${currentPosition * 100}%)`,
          }}
        >
          {lastAddedProducts[0].firstPage?.map((firstPage) => {
            return (
              <ProductCard>
                <ProductImageWrapper>
                  <img src={firstPage.image} />
                </ProductImageWrapper>
                <ProductCardFooter>
                  <p>{firstPage.name}</p>
                  <p>{firstPage.price}</p>
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
          {lastAddedProducts[1].secondPage?.map((secondPage) => {
            return (
              <ProductCard>
                <ProductImageWrapper>
                  <img src={secondPage.image} />
                </ProductImageWrapper>
                <ProductCardFooter>
                  <p>{secondPage.name}</p>
                  <p>{secondPage.price}</p>
                </ProductCardFooter>
              </ProductCard>
            );
          })}
        </CarouselItem>
      </CarouselWrapper>
      <button
        onClick={() =>
          handleUpdateSlide(
            currentPosition === slideLength ? slideLength : currentPosition + 1
          )
        }
      >
        Next
      </button>
      <button
        onClick={() =>
          handleUpdateSlide(currentPosition < 0 ? 0 : currentPosition - 1)
        }
      >
        Previous
      </button>
    </CarouselContainer>
  );
};

export default ProductsCarousel;
