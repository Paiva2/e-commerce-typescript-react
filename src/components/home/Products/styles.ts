import { styled } from "../../../../config/styles-config";

export const MiddleContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  pd: "1.25rem",
  gap: "1.25rem",
  w: "100%",
});

export const AsideContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: ".625rem",

  "> div": {
    display: "flex",
    flexDirection: "column",
    gap: ".625rem",
    background: "#202024",
    width: "11.25rem",
    padding: ".625rem",
    borderRadius: "5px",
  },

  ul: {
    listStyle: "none",
    margin: ".3125rem",
  },
});

export const ColorsWrapper = styled("div", {
  display: "flex",
  gap: ".3125rem",
  cursor: "pointer",

  li: {
    textTransform: "capitalize",

    "&:hover": {
      color: "#00875F",
    },
  },

  ".closeVisible": {
    visibility: "1",
    opacity: "1",
  },

  svg: {
    color: "#fff",
    fontSize: "1.25rem",
    visibility: "0",
    opacity: "0",

    "&:hover": {
      color: "#F80A0A",
    },
  },
});

export const ProductsContainer = styled("div", {
  display: "flex",
  w: "100%",
  h: "100%",
  flexDirection: "column",
  justifyContent: "center",
  gap: "1.25rem",
});

export const ProducsTitleWrapper = styled("div", {
  alignSelf: "flex-start",
});

export const ProductsWrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(4, 0fr)",
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
  br: "5px",

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
