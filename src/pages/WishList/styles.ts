import { styled } from "../../../config/styles-config";

export const WishListContainer = styled("div", {
  display: "flex",
  minHeight: "100vh",
  justifyContent: "center",
  background: "#202024",

  ".close-icon": {
    alignSelf: "flex-start",
    color: "#fff",
    fontSize: "1.5625rem",
    background: "#C02121",
    borderBottomLeftRadius: "5px",
    w: "1.875rem",
    cursor: "pointer",
    transition: "background-color 0.2s",

    "&:hover": {
      background: "#F80A0A",
    },
  },
});

export const WishListWrapper = styled("div", {
  w: "100%",
  pd: "1.25rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: ".9375rem",
  overflow: "auto",
});

export const UpSideContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "1px solid gray",
  w: "63%",
  pd: ".9375rem",

  p: {
    fontWeight: "bold",
    color: "#00B37E",
  },

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
  w: "70%",
  background: "#121214",
  br: "8px",
  overflow: "hidden",
  h: "8.75rem",
});

export const ProductResume = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "1.25rem",
  w: "18.75rem",
  wordBreak: "break-word",

  ">div:last-child": {
    display: "flex",
    flexDirection: "column",
    gap: ".625rem",
    w: "9.375rem",
    justifyContent: "center",
  },
});

export const ProductImageWrapper = styled("div", {
  w: "65%",
  h: "100%",

  img: {
    w: "100%",
    h: "100%",
  },
});

export const ActionsWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  w: "18.125rem",
  gap: ".625rem",
  justifyContent: "space-between",

  ".icon": {
    cursor: "pointer",
  },

  "> div:first-child": {
    w: "100%",
    display: "flex",
    gap: "1.25rem",
    alignItems: "center",

    button: {
      display: "grid",
      placeItems: "center",
      w: "3.75rem",
      h: "2.1875rem",
      br: "1.25rem",
      border: "0",
      font: "0",
      cursor: "pointer",
      color: "#fff",
      fontSize: "1.4375rem",
      transition: "background-color 0.2s ease-in-out",

      "&:first-child": {
        background: "#00B37E",

        "&:hover": {
          background: "#00875F",
        },
      },
    },

    svg: {
      fontSize: "1.375rem",
    },
  },
});

export const Paragraph = styled("p", {
  variants: {
    type: {
      titleProduct: {
        fontSize: "1.125rem",
        fontWeight: "bold",
      },
      description: {
        fontSize: ".75rem",
        textTransform: "capitalize",
      },
    },
  },
});
