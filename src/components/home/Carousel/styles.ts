import { styled } from "../../../../config/styles-config";

export const CarouselContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  position: "relative",
  w: "100%",
  gap: ".625rem",
  marginBottom: "1.25rem",
});

export const CarouselItemsWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  w: "100%",
  overflow: "hidden",
});

export const CarouselItems = styled("div", {
  w: "100%",
  transition: "all 0.5s ease-in-out",

  img: {
    minWidth: "100vw",
    w: "100%",
    h: "25rem",
    objectFit: "fill",
  },
});

export const DotsContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: ".5rem",

  ".activeDot": {
    background: "#33b48d",
    transition: "background-color 0.2s ease",
    borderRadius: ".625rem",
    width: "1.25rem",
  },
});

export const ActionsButtonsContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  position: "absolute",
  justifyContent: "space-between",
  top: "35%",
  w: "100%",
  pd: ".9375rem",

  button: {
    border: "0",
    pd: "0",
    m: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    fontSize: "3.75rem",
    color: "#fff",
    cursor: "pointer",
    transition: "color 0.3s ease-in-out",

    "&:hover": {
      color: "#00875F",
    },
  },
});

export const Dots = styled("button", {
  w: ".625rem",
  h: ".625rem",
  borderRadius: "50%",
  border: "none",
  cursor: "pointer",
  background: "#cccccc",
});
