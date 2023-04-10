import React, { useRef, useEffect, useCallback } from "react";

const StarIcon = ({ rating }: { rating: number }) => {
  const ratingContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fillStarsRating();
  }, []);

  const fillStarsRating = useCallback(() => {
    const ratingStars = ratingContainerRef.current?.children;

    if (ratingStars) {
      for (let i = 0; i < rating; i++) {
        ratingStars[i].setAttribute("fill", "yellow");
      }
    }
  }, []);

  return (
    <div ref={ratingContainerRef}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20px"
        height="22px"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 17L6 20L7.5 14L3 9L9.5 8.5L12 3L14.5 8.5L21 9L16.5 14L18 20L12 17Z"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20px"
        height="22px"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 17L6 20L7.5 14L3 9L9.5 8.5L12 3L14.5 8.5L21 9L16.5 14L18 20L12 17Z"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20px"
        height="22px"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 17L6 20L7.5 14L3 9L9.5 8.5L12 3L14.5 8.5L21 9L16.5 14L18 20L12 17Z"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20px"
        height="22px"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 17L6 20L7.5 14L3 9L9.5 8.5L12 3L14.5 8.5L21 9L16.5 14L18 20L12 17Z"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20px"
        height="22px"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 17L6 20L7.5 14L3 9L9.5 8.5L12 3L14.5 8.5L21 9L16.5 14L18 20L12 17Z"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default StarIcon;
