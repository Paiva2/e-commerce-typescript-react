import { styled } from "../../../config/styles-config";

export const WishListContainer = styled("div", {
  display: "flex",
  minHeight: "100vh",
  justifyContent: "center",

  ".icon": {
    cursor: "pointer",
  },
});

export const WishListWrapper = styled("div", {
  width: "40%",
  padding: "1.25rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: ".9375rem",
});

export const UpSideContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "1px solid red",
  w: "90%",
  pd: ".9375rem",

  "> div:last-child": {
    display: "flex",
    gap: "4.375rem",
    w: "16.875rem",
  },
});

export const ProductContainer = styled("div", {
  w: "90%",
  display: "flex",
  flexDirection: "column",
  gap: "1.875rem",
  alignItems: "center",
});

export const ProductWrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  w: "100%",
});

export const ProductResume = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "1.25rem",
  w: "18.75rem",
  wordBreak: "break-word",

  "> div:first-child": {
    img: {
      w: "120px",
      h: "120px",
    },
  },

  ">div:last-child": {
    display: "flex",
    flexDirection: "column",
    gap: ".3125rem",
    w: "9.375rem",
  },
});

export const PriceWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  w: "18.125rem",
  gap: ".625rem",

  "> div:first-child": {
    w: "5rem",
  },
});

export const Paragraph = styled("p", {
  variants: {
    type: {
      titleProduct: {
        fontSize: "16px",
        fontWeight: "bold",
      },
      description: {
        fontSize: "12px",
      },
    },
  },
});
