import { styled } from "../../../../config/styles-config";

export const CarouselTitle = styled("div", {
  width: "40.625rem",
});

export const CarouselContainer = styled("div", {
  maxWidth: "50rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  position: "relative",
  margin: "0 auto",
  marginBottom: "1.25rem",
});

export const CarouselWrapper = styled("div", {
  width: "44rem",
  height: "15rem",
  borderRadius: "5px",
  padding: ".625rem",
  display: "flex",
  overflow: "hidden",
  background: "transparent",
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
  background: "rgb(32, 32, 36)",
  borderRadius: "5px",
  overflow: "hidden",
  width: "13.125rem",
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
  fontWeight: 600,

  button: {
    display: "grid",
    placeItems: "center",
    w: "80px",
    h: "35px",
    br: "1.25rem",
    fontSize: ".875rem",
    border: "0",
    cursor: "pointer",
    background: "rgba(0, 0, 0, 0.5)",
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
    top: "130px",
    w: "2.1875rem",
    h: "2.1875rem",
    border: 0,
    br: "50%",
    background: "#00875F",
    color: "#ffff",
    cursor: "pointer",
    transition: "background .3s ease-in-out",

    "&:hover": {
      background: "#0BB07F",
    },
  },

  "> button:first-child": {
    left: "60px",
  },

  "> button:last-child": {
    right: "60px",
  },
});
