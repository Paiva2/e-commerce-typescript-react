import { styled } from "../../../../config/styles-config";

export const CarouselTitle = styled("div", {
  width: "41.5625rem",
});

export const CarouselContainer = styled("div", {
  marginTop: "1.5625rem",
  maxWidth: "41.5625rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  position: "relative",
  margin: "0 auto",
  gap: ".3125rem",
});

export const CarouselWrapper = styled("div", {
  width: "41.5625rem",
  height: "20.9375rem",
  borderRadius: "10px",
  padding: ".625rem",
  display: "flex",
  overflow: "hidden",
  background: "rgb(32, 32, 36)",
});

export const CarouselItem = styled("div", {
  minWidth: "100%",
  display: "flex",
  justifyContent: "center",
  gap: ".625rem",
  transition: "all 0.3s ease-in-out 0s",
  height: "100%",
});

export const ProductCard = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "#121214",
  borderRadius: "5px",
  overflow: "hidden",
  width: "12.5rem",
});

export const ProductImageWrapper = styled("div", {
  width: "100%",
  height: "75%",

  img: {
    width: "100%",
    height: "13.75rem",
  },
});

export const ProductCardFooter = styled("div", {
  width: "100%",
  height: "100%",
  padding: "3px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: ".5rem",
  justifyContent: "space-between",
  fontWeight: 600,

  button: {
    display: "grid",
    placeItems: "center",
    w: "60px",
    h: "30px",
    br: "1.25rem",
    border: "0",
    cursor: "pointer",
    background: "rgba(0, 0, 0, 0.8)",
    color: "#E1E1E6",
    transition: "background-color 0.2s ease-in-out",

    "&:hover": {
      background: "#000",
    },
  },

  "> p:last-child": {
    fontSize: "1rem",
    color: "#00B37E",
  },
});

export const ButtonsWrapper = styled("div", {
  display: "flex",
  alignItems: "center",

  button: {
    display: "grid",
    placeContent: "center",
    position: "absolute",
    top: "180px",
    w: "2.1875rem",
    h: "2.1875rem",
    border: 0,
    br: "50%",
    background: "rgb(0, 135, 95)",
    color: "#ffff",
    cursor: "pointer",
  },

  "> button:first-child": {
    left: "-20px",
  },

  "> button:last-child": {
    right: "-20px",
  },
});
