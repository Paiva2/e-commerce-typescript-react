import { styled } from "../../../config/styles-config";

export const HeaderContainer = styled("div", {
  display: "flex",
  border: "1px solid red",
  pd: "20px",
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

  "> div": {
    display: "flex",
    placeContent: "center",
    gap: ".9375rem",

    ".icon": {
      cursor: "pointer",
      fontSize: "1.4375rem",
    },
  },
});

export const LogoContainer = styled("div", {});

export const SearchContainer = styled("div", {});
