import { styled } from "../../../config/styles-config";

export const SuccessContainer = styled("div", {
  minHeight: "calc(100vh - 15.9375rem)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: ".625rem",
  fontSize: "1.875rem",

  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "15.625rem",
    height: "3.125rem",
    fontSize: "1.25rem",
    background: "#000",
    cursor: "pointer",
    color: "#fff",
    border: "0",
    br: "5px",
    gap: ".625rem",
    boxShadow: "0px 6px 9px -3px rgba(0,0,0,0.71)",
    transition: "background 0.3s",

    "&:hover": {
      background: "#100F0F",
    },
  },
});

export const SuccessMessage = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "7.5rem",
  height: "7.5rem",
  background: "#00B37E",
  br: "50%",
});
