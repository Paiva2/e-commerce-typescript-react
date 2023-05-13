import { ProductsContext } from "../../../context/ProductsContext";
import { useContext } from "react";

export const setRecentAddedProductsSchema = () => {
  const { data } = useContext(ProductsContext);

  const dataLength = data.length;

  const getLastAddedProducts = data.filter(
    (products) => Number(products.id) > dataLength - 6
  );

  const lastAddedProducts = [
    {
      firstPage: [
        {
          id: getLastAddedProducts[0].id,
          name: getLastAddedProducts[0].name,
          image: getLastAddedProducts[0].image,
          price: getLastAddedProducts[0].price,
        },
        {
          id: getLastAddedProducts[1].id,
          name: getLastAddedProducts[1].name,
          image: getLastAddedProducts[1].image,
          price: getLastAddedProducts[1].price,
        },
        {
          id: getLastAddedProducts[2].id,
          name: getLastAddedProducts[2].name,
          image: getLastAddedProducts[2].image,
          price: getLastAddedProducts[2].price,
        },
      ],
    },

    {
      secondPage: [
        {
          id: getLastAddedProducts[3].id,
          name: getLastAddedProducts[3].name,
          image: getLastAddedProducts[3].image,
          price: getLastAddedProducts[3].price,
        },
        {
          id: getLastAddedProducts[4].id,
          name: getLastAddedProducts[4].name,
          image: getLastAddedProducts[4].image,
          price: getLastAddedProducts[4].price,
        },
        {
          id: getLastAddedProducts[5].id,
          name: getLastAddedProducts[5].name,
          image: getLastAddedProducts[5].image,
          price: getLastAddedProducts[5].price,
        },
      ],
    },
  ];

  return lastAddedProducts;
};
