import { styled } from "../../../../../config/styles-config";

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
    br: "5px",
  },

  ul: {
    display: "flex",
    flexDirection: "column",
    gap: ".5rem",
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

export const GenreWrapper = styled("div", {
  div: {
    display: "flex",

    "&:hover": {
      color: "#00875F",
    },

    svg: {
      color: "#fff",
      fontSize: "1.25rem",
      cursor: "pointer",

      "&:hover": {
        color: "#F80A0A",
      },
    },

    li: {
      cursor: "pointer",
    },
  },
});

export const PriceWrapper = styled("div", {
  label: {
    fontSize: "1.125rem",
    fontWeight: "bold",

    input: {
      fontSize: ".875rem",
      h: "1.875rem",
      w: "100%",
      br: "5px",
      border: "0",
      pd: ".3125rem",

      "&::placeholder": {
        color: "#000",
      },
    },
  },
});
