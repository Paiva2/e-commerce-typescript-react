import { styled } from "../../../../config/styles-config";

export const MiddleContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  pd: "1.25rem",
});

export const AsideContainer = styled("div", {
  border: "1px solid red",
});

export const ProductsContainer = styled("div", {});

export const ProductsWrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3, 0fr)",
  gridGap: "1.875rem",
});

export const ProductsStyle = styled("div", {
  w: "23.125rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "#202024",
  overflow: "hidden",
  color: "#C4C4CC",

  a: {
    width: "100%",

    img: {
      w: "100%",
      h: "23.75rem",
    },
  },
});

export const ProductActionsContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderTop: "1px solid grey",

  w: "80%",
  pd: ".625rem",
});

export const IconsWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: ".625rem",
  justifyContent: "center",
  width: "4.375rem",

  svg: {
    cursor: "pointer",
  },

  ".cart-icon": {
    fontSize: "1.4375rem",
    transition: "color 0.3s",

    "&:hover": {
      color: "#3D88E8",
    },
  },

  ".wishlist-icon": {
    fontSize: "1.375rem",
    transition: "color 0.3s",
    mt: ".1875rem",

    "&:hover": {
      color: "#DB1D1D",
    },
  },
});

export const PriceWrapper = styled("div", {
  p: {
    color: "#00B37E",
    fontSize: "1.125rem",

    "&:hover": {
      color: "#00875F",
    },
  },
});
