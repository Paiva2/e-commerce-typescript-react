import { styled } from "../../../config/styles-config";

export const CartContainer = styled("div", {
  display: "flex",
  minHeight: "100vh",
  justifyContent: "center",

  ".icon": {
    cursor: "pointer",
  },
});

export const CartWrapper = styled("div", {
  border: "1px solid red",
  w: "40%",
  pd: "1.25rem",
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
    gap: "70px",
    w: "18.125rem",
  },
});

export const CartProducts = styled("div", {
  w: "90%",
  display: "flex",
  flexDirection: "column",
  gap: "1.875rem",
  alignItems: "center",
});

export const ProductWrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  pd: ".9375rem",
});

export const ProductResume = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "20px",
  w: "300px",

  "> div:first-child": {
    w: "120px",
    height: "120px",

    img: {
      w: "100%",
      h: "120px",
    },
  },

  "> div:nth-child(2)": {
    w: "100px",

    p: {
      fontSize: "14px",
    },
  },
});

export const ActionsContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  w: "18.125rem",
});

export const QuantityWrapper = styled("div", {
  display: "flex",
  gap: ".625rem",
});
