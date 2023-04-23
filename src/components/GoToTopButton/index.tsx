import { useEffect, useState, CSSProperties } from "react";
import { GoTopButton } from "./styles";
import { HiArrowSmUp } from "react-icons/hi";

const GoToTopButton = () => {
  const [showGoTopButton, setShowGoTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setShowGoTopButton(true) : setShowGoTopButton(false);
    });
  }, []);

  const isButtonVisible: CSSProperties = {
    opacity: showGoTopButton ? "1" : "0",
    visibility: showGoTopButton ? "visible" : "hidden",
  };

  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <GoTopButton style={isButtonVisible} onClick={handleGoToTop}>
      <HiArrowSmUp />
    </GoTopButton>
  );
};

export default GoToTopButton;
