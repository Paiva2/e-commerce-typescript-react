import { styled } from "../../../../../config/styles-config";

export const ModalBackground = styled("div", {
  position: "fixed",
  w: "100%",
  h: "100%",
  inset: 0,
  zIndex: 3000,
  background: "rgba(0, 0, 0, 0.65)",
  opacity: "0",
  visibility: "hidden",
  transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
});

export const ModalContent = styled("div", {
  width: "47rem",
  height: "90%",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "#121214",
  br: "5px",
  overflow: "hidden",
});
