import { styled } from "../../../../config/styles-config";

export const CartModalContainer = styled("div", {
  background: "rgba(0, 0, 0, 0.80)",
  zIndex: 3000,
  position: "fixed",
  width: "100%",
  height: "100%",
  inset: 0,
  transition: "all 0.3s ease-in-out",
});

export const CartModalWrapper = styled("div", {
  position: "fixed",
  height: "100vh",
  padding: ".625rem",
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
  height: "100%",
});

export const CartTitle = styled("div", {
  display: "flex",
  justifyContent: "center",
  padding: ".5rem",

  h1: {
    color: " #00B37E",
  },
});

export const ProductsAndFooterContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  height: "90%",
  gap: "1rem",

  "> div:first-child": {
    overflow: "auto",
  },
});

export const ProductCard = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  height: "6.875rem",
  background: "#121214",
  borderRadius: "5px",
  marginBottom: ".625rem",
  overflow: "hidden",
});

export const CardLeftSide = styled("div", {
  display: "flex",
  gap: ".5rem",

  img: {
    width: "7.1875rem",
    height: "6.875rem",
  },

  "> div:last-child": {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    padding: ".3125rem",
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
  height: "100%",
  paddingBottom: ".5rem",

  h3: {
    color: "#00B37E",
    mr: ".5rem",
  },

  button: {
    display: "grid",
    placeItems: "center",
    height: "2.1875rem",
    width: "1.875rem",
    alignSelf: "flex-end",
    background: "#c90101",
    color: "white",
    border: "0",
    borderBottomLeftRadius: "5px",
    font: "0",
  },
});

export const PlaceHolderWrapper = styled("div", {
  display: " flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
});

export const TotalContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  height: "9.375rem",
  padding: ".625rem",
  gap: ".625rem",
  borderTop: "2px solid #616161",
});

export const FooterButtons = styled("button", {
  variants: {
    pattern: {
      checkoutPattern: {
        background: "#00875F",
        color: "#E1E1E6",
        height: "2.5rem",
        cursor: "pointer",
        fontSize: "1.25rem",
        border: "0",
        borderRadius: "5px",
      },

      continueShoppingPatern: {
        height: "2.5rem",
        cursor: "pointer",
        fontSize: "1.25rem",
        background: "#b3b3b9",
        border: "0",
        borderRadius: "5px",
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
