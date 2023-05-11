import { styled } from "../../../config/styles-config";

export const HeaderContainer = styled("div", {
  display: "flex",
  background: "#000",
  position: "sticky",
  top: "0",
  zIndex: 1000,
  pd: "1.25rem",
  overflow: "hidden",
});

export const HeaderWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  w: "100%",
});

export const PurchaserContainer = styled("div", {
  display: "flex",
  gap: "1.25rem",
  alignItems: "center",
  justifyContent: "center",

  "> div": {
    display: "flex",
    gap: ".125rem",

    svg: {
      cursor: "pointer",
      w: "1.4375rem",
      h: "1.4375rem",
      transition: "color 0.2s ease-in-out",
    },

    span: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: ".75rem",
      color: "#fff",
      padding: "0 .3125rem",
      borderRadius: "50%",
      verticalAlign: "top",
      width: "1.25rem",
      height: "1.25rem",
    },

    ".cart-quantity": {
      background: "#00875F",
      opacity: "0",
      visibility: "hidden",
      transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out",
    },

    ".wish-quantity": {
      background: "#DB1D1D",
      opacity: "0",
      visibility: "hidden",
      transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out",
    },

    ".cart-icon": {
      "&:hover": {
        color: "#00875F",
      },
    },

    ".wish-list-icon": {
      mr: ".125rem",
      mt: ".0625rem",
      w: "1.375rem",

      "&:hover": {
        color: "#DB1D1D",
      },
    },

    a: {
      display: "flex",
    },
  },
});

export const LogoContainer = styled("div", {
  a: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: ".625rem",
  },

  svg: {
    fontSize: "1.5625rem",
    display: "grid",
    placeItems: "center",
  },

  span: {
    color: "#00875F",
  },

  p: {
    fontSize: "1.5625rem",
  },
});

export const SearchContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "21.875rem",
  paddingLeft: ".625rem",
  br: "8px",
  background: "#323238",

  svg: {
    fontSize: "1.5625rem",
    display: "grid",
    placeItems: "center",
  },

  input: {
    display: "flex",
    alignItems: "center",
    width: "21.875rem",
    border: "none",
    fontSize: "1.125rem",
    paddingLeft: ".5rem",
    br: "20px",
    height: "2.5rem",
    background: "#323238",
    color: "#E1E1E6",
  },
});
