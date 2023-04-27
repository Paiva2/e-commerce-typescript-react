import { Dispatch, SetStateAction } from "react";
import * as Dialog from "@radix-ui/react-dialog";
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
    <Dialog.Root open={openProductModal}>
      <ModalBackground />
      <ModalContent>
        <button
          onClick={() => setOpenProductModal(!openProductModal)}
          aria-label="Close"
        >
          X
        </button>
        <ProductResume singleProduct={selectedProduct} />
      </ModalContent>
    </Dialog.Root>
  );
};

export default ProductModal;
