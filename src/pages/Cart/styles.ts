import { styled } from "../../../config/styles-config";

export const CartContainer = styled("div", {
  display: "flex",
  minHeight: "100vh",
  justifyContent: "center",
  background: "#202024",
  gap: "20px",

  ".icon": {
    cursor: "pointer",
  },
});

export const CartWrapper = styled("div", {
  w: "50%",
  pd: "1.25rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: ".9375rem",
});

export const UpSideContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  w: "100%",
  textAlign: "center",

  "> div:last-child": {
    w: "18.125rem",
    display: "flex",
    justifyContent: "space-between",

    "> p:last-child": {
      w: "4.0625rem",
    },
  },
});

export const CartProducts = styled("div", {
  w: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "1.875rem",
  alignItems: "center",
});

export const ProductWrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  w: "100%",
  h: "8.75rem",
  background: "#121214",
  br: "8px",
  overflow: "hidden",
});

export const ProductResume = styled("div", {
  display: "flex",
  alignItems: "center",
  w: "18.75rem",

  "> div:first-child": {
    w: "50%",
    height: "100%",

    img: {
      w: "100%",
      h: "100%",
    },
  },

  "> div:nth-child(2)": {
    w: "60%",
    h: "100%",
    wordBreak: "break-word",

    p: {
      fontSize: ".875rem",
    },
  },
});

export const ActionsContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  w: "18.125rem",

  "> p:last-child": {
    w: "5.75rem",
    color: "#00B37E",
    fontWeight: "700",
    pd: ".625rem",
  },
});

export const QuantityWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  minWidth: "5.9375rem",
  justifyContent: "space-between",

  button: {
    display: "grid",
    placeItems: "center",
    font: 0,
    border: 0,
    background: "transparent",
    color: "#FFF",
    cursor: "pointer",

    "&:disabled": {
      opacity: "0.4",
      cursor: "unset",
    },
  },
});

export const DeleteButtonContainer = styled("div", {
  button: {
    display: "grid",
    placeItems: "center",
    font: 0,
    border: 0,
    background: "transparent",
    color: "#FFF",
    w: "2.1875rem",
    h: "2.1875rem",
    cursor: "pointer",
    fontSize: "1.5625rem",
    br: "8px",
    transition: "background-color 0.2s ease-in-out",

    "&:hover": {
      background: "#C02121",
      br: "8px",
    },
  },
});

export const ProductNameWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  pd: ".5rem",

  "> p:nth-child(2)": {
    textTransform: "capitalize",
  },
});
