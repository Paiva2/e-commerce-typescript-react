import { styled } from "../../../../config/styles-config";

export const CartModalContainer = styled("div", {
  background: "rgba(0, 0, 0, 0.80)",
  zIndex: 3000,
  position: "fixed",
  w: "100%",
  h: "100%",
  inset: 0,
  transition: "all 0.3s ease-in-out",
});

export const CartModalWrapper = styled("div", {
  position: "fixed",
  w: "28.125rem",
  h: "100vh",
  pd: ".625rem",
  transition: "all 0.3s ease-in-out",
  right: 0,
  top: 0,
  zIndex: 2000,
  background: "#202024",
  color: "#E1E1E6",
});

export const ModalContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: ".625rem",
  h: "100%",
});

export const CartTitle = styled("div", {
  display: "flex",
  justifyContent: "center",
  pd: ".5rem",

  h1: {
    color: " #00B37E",
  },
});

export const ProductsAndFooterContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  h: "90%",
  gap: "1rem",

  "> div:first-child": {
    overflow: "auto",
  },
});

export const ProductCard = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  h: "6.875rem",
  background: "#121214",
  br: "5px",
  marginBottom: ".625rem",
  overflow: "hidden",
});

export const CardLeftSide = styled("div", {
  display: "flex",
  gap: ".5rem",

  img: {
    w: "7.1875rem",
    h: "6.875rem",
  },

  "> div:last-child": {
    w: "40%",
    display: "flex",
    flexDirection: "column",
    pd: ".3125rem",
    wordBreak: "break-word",
    gap: ".3125rem",

    p: {
      fontSize: ".875rem",
    },
  },
});

export const CardRightSide = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  h: "100%",
  paddingBottom: ".5rem",

  h3: {
    color: "#00B37E",
    mr: ".5rem",
  },

  button: {
    display: "grid",
    placeItems: "center",
    h: "2.1875rem",
    w: "1.875rem",
    alignSelf: "flex-end",
    background: "#c90101",
    color: "white",
    border: "0",
    borderBottomLeftRadius: "5px",
    font: "0",
    cursor: "pointer",
  },
});

export const PlaceHolderWrapper = styled("div", {
  display: " flex",
  justifyContent: "center",
  alignItems: "center",
  h: "100%",
});

export const TotalContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  h: "9.375rem",
  pd: ".625rem",
  gap: ".625rem",
  borderTop: "2px solid #616161",
});

export const FooterButtons = styled("button", {
  variants: {
    pattern: {
      checkoutPattern: {
        background: "#00875F",
        color: "#E1E1E6",
        h: "2.5rem",
        cursor: "pointer",
        fontSize: "1.25rem",
        border: "0",
        br: "5px",
      },

      continueShoppingPatern: {
        h: "2.5rem",
        cursor: "pointer",
        fontSize: "1.25rem",
        background: "#b3b3b9",
        border: "0",
        br: "5px",
      },
    },
  },
});

export const PriceWrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",

  "> h3:last-child": {
    color: " #00B37E",
  },
});
