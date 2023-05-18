import { styled } from "../../../config/styles-config";

export const CartContainer = styled("div", {
  display: "flex",
  minHeight: "100vh",
  justifyContent: "center",
  background: "#202024",
  gap: "1.25rem",

  ".icon": {
    cursor: "pointer",
  },
});

export const CartWrapper = styled("div", {
  w: "50%",
  pd: "1.25rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: ".9375rem",
});

export const UpSideContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  w: "100%",
  textAlign: "center",

  "> div:last-child": {
    w: "18.125rem",
    display: "flex",
    gap: "3.125rem",

    "> p:last-child": {
      w: "4.0625rem",
    },
  },
});

export const CartProducts = styled("div", {
  w: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "1.875rem",
  alignItems: "center",
});

export const ProductWrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  w: "100%",
  h: "8.75rem",
  background: "#121214",
  br: "5px",
  overflow: "hidden",
});

export const ProductResume = styled("div", {
  display: "flex",
  alignItems: "center",
  w: "18.75rem",

  "> div:first-child": {
    w: "50%",
    height: "100%",

    img: {
      w: "100%",
      h: "100%",
    },
  },

  "> div:nth-child(2)": {
    w: "60%",
    h: "100%",
    wordBreak: "break-word",

    p: {
      fontSize: ".875rem",
    },
  },
});

export const ActionsContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  w: "18.125rem",

  "> p:last-child": {
    w: "5.75rem",
    color: "#00B37E",
    fontWeight: "700",
    pd: ".625rem",
  },
});

export const QuantityWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  minWidth: "5.9375rem",
  justifyContent: "space-between",

  button: {
    display: "grid",
    placeItems: "center",
    font: 0,
    border: 0,
    background: "transparent",
    color: "#FFF",
    cursor: "pointer",

    "&:disabled": {
      opacity: "0.4",
      cursor: "unset",
    },
  },
});

export const DeleteButtonContainer = styled("div", {
  button: {
    display: "grid",
    placeItems: "center",
    font: 0,
    border: 0,
    background: "transparent",
    color: "#FFF",
    w: "2.1875rem",
    h: "2.1875rem",
    cursor: "pointer",
    fontSize: "1.5625rem",
    br: "8px",
    transition: "background-color 0.2s ease-in-out",

    "&:hover": {
      background: "#C02121",
      br: "8px",
    },
  },
});

export const ProductNameWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  pd: ".5rem",

  "> p:nth-child(2)": {
    textTransform: "capitalize",
  },
});

export const ResumeContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "21.875rem",
  padding: ".625rem",
  gap: ".625rem",
});

export const ResumeWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  background: "#121214",
  height: "auto",
  br: "5px",
  justifyContent: "space-between",
  padding: ".5rem",
  gap: ".9375rem",
});

export const ResumeTitle = styled("div", {
  display: "flex",
  justifyContent: "center",
  padding: ".5rem",
});

export const InputsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1.25rem",
  height: "auto",

  label: {
    display: "flex",
    flexDirection: "column",
    fontSize: "1.125rem",
    gap: ".5rem",
  },

  input: {
    h: "2.5rem",
    border: "0",
    borderBottom: "1px solid grey",
    background: "#202024",
    pd: ".625rem",
    color: "#fff",
    fontSize: "1.125rem",
    br: "5px",
  },

  button: {
    w: "100%",
    h: "2.5rem",
    fontSize: "1.25rem",
    cursor: "pointer",
    background: "#00875F",
    border: "0",
    color: "#fff",
    br: "5px",
    transition: "background 0.4s",

    "&:hover": {
      background: "#0BB07F",
    },
  },
});

export const TotalWrapper = styled("div", {
  "> div:first-child": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    w: "100%",

    "> h2:last-child": {
      color: "#00B37E",
    },
  },
});

export const CheckoutContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",

  button: {
    width: "15.625rem",
    height: "3.125rem",
    fontSize: "1.25rem",
    background: "transparent",
    cursor: "pointer",
    border: "1px solid #00B37E",
    color: "#fff",
    br: "5px",
    transition: "box-shadow 0.4s",

    "&:hover, &:focus": {
      boxShadow: "inset 17rem 0 0 0 #0BB07F",
      border: "0",
    },
  },
});

export const PromoCodeContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: ".625rem",
  background: "rgb(32, 32, 36)",
  br: "5px",
  padding: ".625rem",

  h2: {
    alignSelf: "center",
  },
});
