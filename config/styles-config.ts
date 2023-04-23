import { createStitches, globalCss } from "@stitches/react";

export const { styled, css, getCssText } = createStitches({
  media: {
    sm: "(max-width: 768px)",
  },
  utils: {
    m: (value: string) => ({
      margin: value,
    }),
    mt: (value: string) => ({
      marginTop: value,
    }),
    mr: (value: string) => ({
      marginRight: value,
    }),
    mb: (value: string) => ({
      marginBottom: value,
    }),
    ml: (value: string) => ({
      marginLeft: value,
    }),

    pd: (value: string) => ({
      padding: value,
    }),
    pt: (value: string) => ({
      paddingTop: value,
    }),
    pr: (value: string) => ({
      paddingRight: value,
    }),
    pb: (value: string) => ({
      paddingBottom: value,
    }),
    pl: (value: string) => ({
      paddingLeft: value,
    }),

    w: (value: string) => ({
      width: value,
    }),
    h: (value: string) => ({
      height: value,
    }),

    br: (value: string) => ({
      borderRadius: value,
    }),
  },
});

export const globalStyles = globalCss({
  "@import": ["url('https://fonts.googleapis.com/css2?family=Roboto&display=swap')"],

  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "Roboto, sans-serif",

    "&:focus": {
      outline: "none",
    },
  },

  "input:webkit-search-decoration": {
    WebkitAppearance: "none",
  },

  body: {
    backgroundColor: "#121214",
    color: "#E1E1E6",
  },

  "a:-webkit-any-link": {
    textDecoration: "none",
    color: "inherit",
  },
});
