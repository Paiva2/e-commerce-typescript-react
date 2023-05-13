import { useState } from "react";
import { setRecentAddedProductsSchema } from "./carouselSchema";

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
    <div
      style={{
        marginTop: "20px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h2>New Products</h2>
      <div
        style={{
          width: "800px",
          height: "300px",
          border: "1px solid red",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            border: "1px solid green",
            minWidth: "100%",
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            transform: `translateX(-${currentPosition * 100}%)`,
            transition: "all 0.3s ease-in-out 0s",
            height: "100%",
          }}
        >
          {lastAddedProducts[0].firstPage?.map((firstPage) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  border: "1px solid blue",
                  width: "200px",
                }}
              >
                <h2>{firstPage.name}</h2>
                <div>
                  <img
                    style={{
                      width: "200px",
                    }}
                    src={firstPage.image}
                  />
                </div>
                <div>
                  <p>Genre: {firstPage.genre}</p>
                  <p>{firstPage.price}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div
          style={{
            border: "1px solid green",
            minWidth: "100%",
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            transform: `translateX(-${currentPosition * 100}%)`,
            transition: "all 0.3s ease-in-out 0s",
          }}
        >
          {lastAddedProducts[1].secondPage?.map((secondPage) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  border: "1px solid blue",
                  width: "200px",
                }}
              >
                <h2>{secondPage.name}</h2>
                <div>
                  <img
                    style={{
                      width: "200px",
                    }}
                    src={secondPage.image}
                  />
                </div>
                <div>
                  <p>Genre: {secondPage.genre}</p>
                  <p>{secondPage.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
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
    </div>
  );
};

export default ProductsCarousel;
