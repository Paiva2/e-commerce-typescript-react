import { styled } from "../../../../config/styles-config";

export const CarouselContainer = styled("div", {
  marginTop: "1.25rem",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

export const CarouselWrapper = styled("div", {
  width: "49.375rem",
  height: "20.625rem",
  background: "#202024",
  borderRadius: "5px",
  padding: ".625rem",
  display: "flex",
  overflow: "hidden",
});

export const CarouselItem = styled("div", {
  minWidth: "100%",
  display: "flex",
  justifyContent: "center",
  gap: "1.875rem",
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
  width: "14.375rem",
});

export const ProductImageWrapper = styled("div", {
  width: "100%",
  height: "75%",

  img: {
    width: "100%",
    height: "100%",
  },
});

export const ProductCardFooter = styled("div", {
  width: "100%",
  height: "100%",
  padding: ".5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: ".5rem",
});
