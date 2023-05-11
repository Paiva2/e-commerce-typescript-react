import { keyframes } from "@stitches/react";
import { styled } from "../../../config/styles-config";

export const LoadingWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "calc(100vh - 15.9375rem)",
  width: "100%",
  color: "#E1E1E6",

  span: {
    fontSize: "1.875rem",
  },
});

const spinnerFrames = keyframes({
  "0%": {
    transform: "translate3d(-50%, -50%, 0) rotate(0deg)",
  },

  "100%": {
    transform: "translate3d(-50%, -50%, 0) rotate(360deg)",
  },
});

export const Spin = styled("div", {
  "&::before": {
    animation: `1.5s linear infinite ${spinnerFrames}`,
    animationPlayState: "inherit",
    border: "solid 5px #cfd0d1",
    borderBottomColor: "#00B37E",
    borderRadius: "50%",
    content: "",
    height: "2.8125rem",
    width: "2.8125rem",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate3d(-50%, -50%)",
    willChange: "transform",
  },
});
