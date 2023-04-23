import { styled } from "../../../config/styles-config";

export const HeaderContainer = styled("div", {
  display: "flex",
  background: "#121214",
  position: "sticky",
  top: "0",
  zIndex: 1000,
  border: "1px solid red",
  pd: "1.25rem",
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
      fontSize: "14px",
      color: "#fff",
      padding: "0 5px",
      borderRadius: "50%",
      verticalAlign: "top",
      width: "18px",
      height: "18px",
    },

    ".cart-quantity": {
      background: "#3D88E8",
      opacity: "0",
      visibility: "0",
      transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out",
    },

    ".wish-quantity": {
      background: "#DB1D1D",
      opacity: "0",
      visibility: "0",
      transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out",
    },

    ".cart-icon": {
      "&:hover": {
        color: "#3D88E8",
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

export const LogoContainer = styled("div", {});

export const SearchContainer = styled("div", {});
