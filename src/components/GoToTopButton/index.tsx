import { useEffect, useState, CSSProperties } from "react";
import { GoTopButton } from "./styles";
import { HiArrowSmUp } from "react-icons/hi";
import { handleGoToTop } from "../../utils/GoToTop";

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

  return (
    <GoTopButton style={isButtonVisible} onClick={handleGoToTop}>
      <HiArrowSmUp />
    </GoTopButton>
  );
};

export default GoToTopButton;
