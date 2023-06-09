import { styled } from "../../../config/styles-config";

export const PlaceHolderContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "calc(100vh - 15.9375rem)",
  width: "100%",
  color: "#E1E1E6",

  p: {
    fontSize: "2.5rem",
  },

  svg: {
    fontSize: "2.5rem",
  },
});
