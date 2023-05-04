import { Dispatch, SetStateAction } from "react";
import { IProduct } from "../../interfaces/interfaces";
import { insertItem } from "./apiMethods";

export const sendItemToEndPoint = (
  endpoint: string,
  product: IProduct,
  selectedColor: string,
  setData: Dispatch<SetStateAction<IProduct[]>>
) => {
  const objectWithColorChange = {
    ...product,
    filterParams: { ...product.filterParams, colors: selectedColor },
  };

  insertItem(endpoint, objectWithColorChange, setData);
};
