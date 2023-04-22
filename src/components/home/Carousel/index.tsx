import { useCallback, useEffect, useState } from "react";
import {
  ActionsButtonsContainer,
  CarouselContainer,
  CarouselItems,
  CarouselItemsWrapper,
  Dots,
  DotsContainer,
} from "./styles";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { carouselImages } from "./assets/SlideImages";

const Carousel = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const totalImages = carouselImages.length;
  const AUTO_UPDATE_SLIDE_TIME = 6000;

  const updateSlideImage = useCallback(
    (newIndex: number) => {
      if (newIndex < 0) {
        newIndex = totalImages - 1;
      }

      if (newIndex > totalImages - 1) {
        newIndex = 0;
      }

      setCurrentPosition(newIndex);
    },
    [currentPosition]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      updateSlideImage(
        currentPosition + 1 === totalImages ? 0 : currentPosition + 1
      );
    }, AUTO_UPDATE_SLIDE_TIME);

    return () => {
      interval && clearInterval(interval);
    };
  }, [currentPosition, updateSlideImage]);

  return (
    <CarouselContainer>
      <CarouselItemsWrapper>
        {carouselImages.map((item) => (
          <CarouselItems
            key={item.id}
            style={{
              transform: `translateX(-${currentPosition * 100}%)`,
            }}
          >
            <img src={item.imageUrl} alt={`Carousel image ${item.id}`} />
          </CarouselItems>
        ))}
      </CarouselItemsWrapper>
      <DotsContainer>
        {carouselImages.map((image, i) => (
          <Dots
            className={currentPosition === i ? "activeDot" : ""}
            key={image.id}
            onClick={() => updateSlideImage(i)}
          />
        ))}
      </DotsContainer>
      <ActionsButtonsContainer>
        <button
          onClick={() =>
            updateSlideImage(
              currentPosition < 0 ? totalImages : currentPosition - 1
            )
          }
        >
          <MdKeyboardArrowLeft />
        </button>
        <button
          onClick={() =>
            updateSlideImage(
              currentPosition === totalImages ? 0 : currentPosition + 1
            )
          }
        >
          <MdKeyboardArrowRight />
        </button>
      </ActionsButtonsContainer>
    </CarouselContainer>
  );
};

export default Carousel;
