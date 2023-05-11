import { styled } from "../../../config/styles-config";

export const FooterContainer = styled("div", {
  w: "100%",
  background: "#000",
  pd: "1.25rem",
});

export const NavContainer = styled("div", {
  display: "flex",
  justifyContent: "space-evenly",

  h3: {
    color: "#00875F",
  },

  "> div": {
    display: "flex",
    flexDirection: "column",
    gap: ".3125rem",

    ul: {
      listStyle: "none",
      pd: "0",

      a: {
        "&:hover": {
          textDecoration: "underline #00B37E",
        },
      },

      li: {
        display: "flex",
        flexDirection: "column",
        marginBottom: ".1875rem",
      },
    },
  },
});

export const FooterIconsWrapper = styled("div", {
  display: "flex",
  gap: ".5rem",
  fontSize: "1.4375rem",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});

export const CopyrightContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  gap: ".3125rem",

  span: {
    color: "#00875F",
    fontWeight: "bold",
  },
});

export const NewsLetter = styled("div", {
  "> div": {
    display: "flex",
    gap: ".3125rem",
  },

  input: {
    w: "15.625rem",
    h: "1.875rem",
    paddingLeft: ".625rem",
    br: "8px",
    background: "#323238",
    border: "0",
    color: "#fff",
    fontSize: ".875rem",

    "&::placeholder": {
      color: "#fff",
    },
  },

  button: {
    w: "3.125rem",
    h: "1.875rem",
    br: "8px",
    border: "0",
    color: "#E1E1E6",
    background: "#00875F",
    cursor: "pointer",
    fontSize: ".875rem",
    fontWeight: "bold",
  },
});
