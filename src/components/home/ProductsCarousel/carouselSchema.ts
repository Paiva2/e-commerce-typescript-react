import { ProductsContext } from "../../../context/ProductsContext";
import { useContext } from "react";

export const setRecentAddedProductsSchema = () => {
  const { data } = useContext(ProductsContext);

  const dataLength = data.length;

  const getLastAddedProducts = data.filter(
    (products) => Number(products.id) > dataLength - 6
  );

  const productConstructor = (index: number) => {
    const productBody = {
      id: getLastAddedProducts[index].id,
      name: getLastAddedProducts[index].name,
      description: getLastAddedProducts[index].description,
      price: getLastAddedProducts[index].price,
      image: getLastAddedProducts[index].image,
      quantity: getLastAddedProducts[index].quantity,
      rating: getLastAddedProducts[index].rating,
      filterParams: {
        colors: getLastAddedProducts[index].filterParams.colors,
        genre: getLastAddedProducts[index].filterParams.genre,
      },
    };

    return productBody;
  };

  const lastAddedProducts = [
    {
      firstPage: [
        productConstructor(0),
        productConstructor(1),
        productConstructor(2),
      ],
    },

    {
      secondPage: [
        productConstructor(3),
        productConstructor(4),
        productConstructor(5),
      ],
    },
  ];

  return lastAddedProducts;
};
