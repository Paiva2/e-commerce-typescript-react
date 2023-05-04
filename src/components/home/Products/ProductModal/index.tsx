import { Dispatch, SetStateAction, useContext, useRef } from "react";

import ProductResume from "../ProductResume";
import { IProduct } from "../../../../../interfaces/interfaces";
import { ModalBackground, ModalContent } from "./styles";
import { ProductsContext } from "../../../../context/ProductsContext";

interface Props {
  openProductModal: boolean;
  setOpenProductModal: Dispatch<SetStateAction<boolean>>;
  selectedProduct: IProduct;
}

const ProductModal = ({
  openProductModal,
  setOpenProductModal,
  selectedProduct,
}: Props) => {
  const { setSelectedProductColor } = useContext(ProductsContext);
  const selectRef = useRef<HTMLSelectElement>(null);

  const resetColorsToDefault = () => {
    setSelectedProductColor("");

    if (selectRef.current) {
      selectRef.current.selectedIndex = 0;
    }
  };

  return (
    <ModalBackground
      onClick={() => {
        setOpenProductModal(false), resetColorsToDefault();
      }}
      style={
        openProductModal
          ? {
              opacity: "1",
              visibility: "visible",
            }
          : undefined
      }
    >
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ProductResume
          setOpenProductModal={setOpenProductModal}
          openProductModal={openProductModal}
          singleProduct={selectedProduct}
          selectRef={selectRef}
          resetColorsToDefault={resetColorsToDefault}
        />
      </ModalContent>
    </ModalBackground>
  );
};

export default ProductModal;
