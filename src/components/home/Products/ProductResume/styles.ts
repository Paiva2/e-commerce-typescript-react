import { keyframes } from "@stitches/react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { styled } from "../../../../../config/styles-config";

export const TriggerButton = styled(AccordionPrimitive.Trigger, {
  display: "flex",
  justifyContent: "space-between",
  border: "0",
  padding: ".625rem",
  width: "100%",
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
