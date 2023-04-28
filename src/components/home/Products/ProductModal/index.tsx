import { Dispatch, SetStateAction } from "react";

import ProductResume from "../ProductResume";
import { IProduct } from "../../../../../interfaces/interfaces";
import { ModalBackground, ModalContent } from "./styles";

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
  return (
    <ModalBackground
      onClick={() => setOpenProductModal(false)}
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
        />
      </ModalContent>
    </ModalBackground>
  );
};

export default ProductModal;
