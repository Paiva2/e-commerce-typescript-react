import { styled } from "../../../../config/styles-config";

export const MiddleContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  pd: "1.25rem",
  gap: "1.25rem",
  w: "100%",
  minHeight: "100vh",
});

export const ProductsContainer = styled("div", {
  display: "flex",
  w: "100%",
  height: "100%",
  flexDirection: "column",
  justifyContent: "center",
  gap: "1.25rem",
});

export const ProducsTitleWrapper = styled("div", {
  alignSelf: "flex-start",
});

export const ProductsWrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(4, 0fr)",
  gridGap: "1.875rem",
  alignItems: "center",
});

export const ProductsCardStyle = styled("div", {
  w: "23.125rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "#202024",
  overflow: "hidden",
  color: "#E1E1E6",
  br: "5px",
  gap: ".3125rem",
  position: "relative",
  transition: "all 0.2s",

  footer: {
    position: "absolute",
    bottom: "5.625rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: "translateY(30%)",
    opacity: "0",
    visibility: "hidden",
    transition: "all 0.2s ease-in-out",

    button: {
      display: "grid",
      placeItems: "center",
      w: "6.25rem",
      h: "2.5rem",
      br: "1.25rem",
      border: "0",
      cursor: "pointer",
      fontSize: "1.125rem",
      background: "rgba(0, 0, 0, 0.8)",
      color: "#E1E1E6",
      transition: "background-color 0.2s ease-in-out",

      "&:hover": {
        background: "#000",
      },
    },
  },

  img: {
    w: "100%",
    h: "23.75rem",
  },

  "&:hover": {
    transform: "scale(1.03)",
    mozTransform: "scale(1.03)",
    webKitTransform: "scale(1.03)",

    footer: {
      transform: "translateY(0%)",
      opacity: "1",
      visibility: "visible",
    },
  },
});

export const ProductRating = styled("span", {
  display: "flex",
  alignItems: "center",
  fontSize: ".875rem",
  gap: ".3125rem",
});

export const PriceWrapper = styled("div", {
  pd: ".3125rem",

  h2: {
    color: "#00B37E",
  },
});
