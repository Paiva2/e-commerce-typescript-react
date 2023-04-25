import { useContext } from "react";
import { ArrowButtons, PageButtonsContainer, ProductsButtons } from "./styles";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { ProductsContext } from "../../../context/ProductsContext";
import { handleGoToTop } from "../../../utils/GoToTop";

const ProductsPagination = () => {
  const { setCurrentPage, currentPage, totalPages } = useContext(ProductsContext);

  const handlePreviousPage = () => {
    if (currentPage <= 0) return;

    setCurrentPage((oldVal) => oldVal - 1);
    handleGoToTop();
  };

  const handleNextPage = () => {
    if (currentPage + 1 >= totalPages.length) return;

    setCurrentPage((oldVal) => oldVal + 1);
    handleGoToTop();
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
            setCurrentPage(index), handleGoToTop();
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
