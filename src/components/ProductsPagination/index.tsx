import { useContext } from "react";
import { ArrowButtons, PageButtonsContainer, ProductsButtons } from "./styles";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { ProductsContext } from "../../context/ProductsContext";

const ProductsPagination = () => {
  const { setCurrentPage, currentPage, totalPages } =
    useContext(ProductsContext);

  const goToTop = () => {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
  };

  const handlePreviousPage = () => {
    if (currentPage <= 0) return;

    setCurrentPage((oldVal) => oldVal - 1);
    goToTop();
  };

  const handleNextPage = () => {
    if (currentPage + 1 >= totalPages.length) return;

    setCurrentPage((oldVal) => oldVal + 1);
    goToTop();
  };

  return (
    <PageButtonsContainer>
      <ArrowButtons onClick={handlePreviousPage}>
        <BsArrowLeftShort />
      </ArrowButtons>
      {totalPages.map((_, index) => (
        <ProductsButtons
          key={index}
          className={index === currentPage ? "active" : ""}
          onClick={() => {
            setCurrentPage(index), goToTop();
          }}
        >
          {index + 1}
        </ProductsButtons>
      ))}
      <ArrowButtons onClick={handleNextPage}>
        <BsArrowRightShort />
      </ArrowButtons>
    </PageButtonsContainer>
  );
};

export default ProductsPagination;
