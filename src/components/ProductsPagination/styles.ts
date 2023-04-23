import { styled } from "../../../config/styles-config";

export const PageButtonsContainer = styled("div", {
  display: "flex",
  w: "100%",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  mt: "1.25rem",

  ".active": {
    backgroundColor: "#00875F",
    color: "#fff",
  },

  "> button": {
    cursor: "pointer",
    display: "grid",
    placeItems: "center",
    transition: "background 0.2s ease-in-out, color 0.2s ease-in-out",
  },
});

export const ArrowButtons = styled("button", {
  background: "transparent",
  color: "#fff",
  border: "0",
  fontSize: "2.1875rem",

  "&:hover": {
    color: "#00875F",
  },
});

export const ProductsButtons = styled("button", {
  fontSize: "1.25rem",
  border: "0",
  width: "1.875rem",
  height: "1.875rem",
  br: "50%",
});
