import { styled } from "../../../config/styles-config";

export const GoTopButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#00875F",
  position: "fixed",
  bottom: "0",
  right: "0",
  fontSize: "2.8125rem",
  zIndex: "100",
  borderRadius: "50%",
  border: "none",
  cursor: "pointer",
  mb: "3rem",
  mr: "2rem",
  color: "#E1E1E6",
  transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
});
