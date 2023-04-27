import { styled } from "../../../../../config/styles-config";
import * as Dialog from "@radix-ui/react-dialog";

export const ModalBackground = styled(Dialog.Overlay, {
  backgroundColor: "rgba(0, 0, 0, 0.60)",
  position: "fixed",
  inset: 0,
});

export const ModalContent = styled(Dialog.Content, {
  position: "fixed",
  top: "50%",
  left: "50%",
  padding: "1.5625rem",
  borderRadius: "5",
  background: "#202024",
  transform: "translate(-50%, -50%)",
});
