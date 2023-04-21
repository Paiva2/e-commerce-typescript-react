import React, { useState } from "react";

const carouselImages = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  },
  {
    id: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

const Carousel = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const totalImages = carouselImages.length;

  const handleNextSlide = () => {
    if (currentPosition >= totalImages - 1) {
      setCurrentPosition(-1);
    }

    setCurrentPosition((prevPosition) => prevPosition + 1);
  };

  const handlePreviousSlide = () => {
    if (currentPosition < 0) {
      setCurrentPosition(totalImages - 1);
    }

    setCurrentPosition(currentPosition - 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {carouselImages.map((item) => (
          <div
            style={{
              transform: `translateX(-${currentPosition * 100}%)`,
              width: "100%",
              transition: "all 0.5s ease-in-out",
            }}
          >
            <img
              style={{
                minWidth: "100vw",
                width: "100%",
                height: "650px",
                objectFit: "fill",
              }}
              src={item.imageUrl}
            />
          </div>
        ))}
      </div>

      <div>
        <button onClick={handlePreviousSlide}>Prev</button>{" "}
        <button onClick={handleNextSlide}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
