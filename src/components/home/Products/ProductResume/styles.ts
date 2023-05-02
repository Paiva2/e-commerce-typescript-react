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
    borderRadius: "5px",
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
  "> h1:nth-child(2)": {
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
        w: "11.5625rem",
        h: "2.8125rem",
        pd: ".3125rem",
        borderRadius: "8px",
        background: "#00875F",
        border: "0",
        cursor: "pointer",
        color: "#fff",
        fontSize: "1.4375rem",
      },

      wishListPattern: {
        display: "grid",
        placeContent: "center",
        w: "2.5rem",
        h: "2.4375rem",
        pd: ".3125rem",
        borderRadius: "50%",
        background: "#9b3535",
        border: "0",
        cursor: "pointer",
        color: "#fff",
        font: "0",
      },
    },
  },
});

export const AccordionWrapper = styled("div", {
  w: "16.875rem",
  background: "#F9F8F9",
  borderRadius: "5px",
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
  background: "#FFF",
  borderBottom: "1px solid #E1E1E1",
  color: "#00875F",

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
  borderBottom: "1px solid #E1E1E1",
  overflow: "hidden",

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
