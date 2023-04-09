import { styled } from "../../../config/config";

export const FooterContainer = styled("div", {
  border: "1px solid red",
  pd: "1.25rem",
});

export const NavContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",

  ul: {
    listStyle: "none",
    pd: "0",
  },
});

export const CopyrightContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
});
