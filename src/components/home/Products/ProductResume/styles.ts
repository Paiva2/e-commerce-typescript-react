import { keyframes } from "@stitches/react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { styled } from "../../../../../config/styles-config";

export const ProductModalContentContainer = styled("div", {
  display: "flex",
  w: "auto",
  h: "100%",
  overflow: "hidden",
});

export const ProductImageContainer = styled("div", {
  w: "60%",

  img: {
    w: "100%",
    h: "100%",
    objectFit: "cover",
  },
});

export const ProductInformationsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  w: "40%",
});

export const CloseButtonWrapper = styled("div", {
  display: "flex",
  justifyContent: "flex-end",

  button: {
    display: "grid",
    placeContent: "left",
    background: "transparent",
    border: 0,
    color: "#FFF",
    cursor: "pointer",
    br: "5px",
    transition: "background-color 0.2s ease-in-out",

    "&:hover": {
      background: "#c90101",
    },
  },
});

export const ProductInformationsWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  pd: ".9375rem",
  gap: "1.25rem",
});

export const ProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: ".9375rem",

  h2: {
    color: "#00B37E",
  },

  p: {
    textTransform: "capitalize",
  },
});

export const SelectProductVariations = styled("div", {
  select: {
    textTransform: "capitalize",
  },
});

export const ActionButtonsWrapper = styled("div", {
  display: "flex",
  gap: ".625rem",
  alignItems: "center",
});

export const ActionButton = styled("button", {
  variants: {
    type: {
      cartPattern: {
        display: "grid",
        placeContent: "center",
        w: "11.5625rem",
        h: "2.8125rem",
        br: "5px",
        background: "#00875F",
        border: "0",
        cursor: "pointer",
        color: "#fff",
        fontSize: "1.4375rem",
        transition: "background-color 0.2s ease-in-out",

        "&:hover": {
          background: "#00B37E",
        },
      },

      wishListPattern: {
        display: "grid",
        placeContent: "center",
        w: "2.625rem",
        h: "2.625rem",
        br: "50%",
        background: "#C02121",
        br: "50%",
        border: "0",
        cursor: "pointer",
        fontSize: "1.375rem",
        color: "#fff",
        font: "0",
        transition: "background-color 0.2s ease-in-out",

        "&:hover": {
          background: "#DB1D1D",
        },
      },
    },
  },
});

export const AccordionWrapper = styled("div", {
  w: "16.875rem",
  br: "5px",
  color: "#000",
  fontSize: ".875rem",
  overflow: "hidden",
});

export const TriggerButton = styled(AccordionPrimitive.Trigger, {
  display: "flex",
  justifyContent: "space-between",
  border: "0",
  pd: ".625rem",
  w: "100%",
  fontSize: "1.125rem",
  background: "#202024",
  borderBottom: "1px solid #000",
  color: "#E1E1E6",

  '&[data-state="open"]': {
    svg: {
      transition: "all 0.4s ease",
      transform: "rotate(-180deg)",
    },
  },

  svg: {
    transition: "all 0.4s ease",
    fontSize: "1.375rem",
  },
});

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" },
});

const slideUp = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
});

export const ModalContent = styled(AccordionPrimitive.Content, {
  fontSize: "1rem",
  borderBottom: "1px solid #000",
  overflow: "hidden",
  background: "#333334",
  color: "#E1E1E6",

  "> div:first-child": {
    pd: ".9375rem .625rem",
  },

  '&[data-state="open"]': {
    animation: `${slideDown} 250ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
  },

  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
  },
});
