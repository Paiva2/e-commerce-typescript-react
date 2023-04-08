import { styled } from "../../../../config/config";

export const MiddleContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  minHeight: "100vh",
});

export const AsideContainer = styled("div", {
  border: "1px solid red",
});

export const ProductsContainer = styled("div", {});

export const ProductsWrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3, 0fr)",
  gridGap: "1.875rem",
});

export const PageButtonsContainer = styled("div", {
  display: "flex",
  w: "100%",
  alignItems: "center",
  justifyContent: "center",

  ".active": {
    backgroundColor: "red",
  },

  button: {
    display: "grid",
    placeItems: "center",
  },
});

export const ProductsStyle = styled("div", {
  border: "1px solid red",
  w: "23.125rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  img: {
    w: "100%",
    h: "23.75rem",
  },
});

export const ProductActionsContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  w: "100%",

  ".icon": {
    cursor: "pointer",
  },
});
