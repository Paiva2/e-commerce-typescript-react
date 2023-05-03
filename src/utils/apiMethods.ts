import { Dispatch, SetStateAction } from "react";
import axios from "axios";

import { IProduct } from "../../interfaces/interfaces";
import { alertMessage } from "./AlertMessage";

const sortData = (response: IProduct[] | IProduct) => {
  if (Array.isArray(response)) {
    return response.sort((a, b) => Number(a.price) - Number(b.price)); // don't sort if its an unique product
  }

  return response;
};

export function callApi(
  endpoint: string,
  setData: Dispatch<SetStateAction<IProduct[]>>,
  setLoading?: Dispatch<SetStateAction<boolean>>
) {
  axios
    .get<Array<IProduct>>(`http://localhost:3000/${endpoint}`)
    .then((res) => res)
    .then((responseJson) => {
      setData(sortData(responseJson.data));

      setLoading && setLoading(false);
    })
    .catch((error) => {
      if (error.response) console.warn("Error. Try Again Later.");
      else if (error.request) console.log(error.request);
      else console.log("Error", error.message);

      setLoading && setLoading(true);
    });
}

type insertProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  rating: number;
  filterParams: {
    colors: string | undefined;
    genre: string[];
  };
};

export const insertItem = (
  endpoint: string,
  body: insertProduct,
  setData: Dispatch<SetStateAction<IProduct[]>>
) => {
  axios
    .post(`http://localhost:3000/${endpoint}`, body)
    .then(() => {
      callApi(endpoint, setData);

      alertMessage("success", `Product added to ${endpoint}!`);
    })
    .catch((err) => {
      const isItemAlreadyOnEndpoint = err.response.data.match(
        "Error: Insert failed, duplicate id"
      );

      err &&
        alertMessage(
          "warning",
          `${
            isItemAlreadyOnEndpoint
              ? `This product is already on ${endpoint}!`
              : "Undefined, please contact system support."
          }`
        );
    });
};

export const editItem = (
  endpoint: string,
  id: string,
  infoToChange: {},
  setData: Dispatch<SetStateAction<IProduct[]>>
) => {
  axios
    .patch(`http://localhost:3000/${endpoint}/${id}`, infoToChange)
    .then(() => callApi(endpoint, setData))
    .catch((error) => {
      if (error.response) console.warn("Error. Try Again Later.");
      else if (error.request) console.log(error.request);
      else console.log("Error", error.message);
    });
};

export const deleteItem = (
  endpoint: string,
  id: string,
  setData: Dispatch<SetStateAction<IProduct[]>>
) => {
  axios
    .delete(`http://localhost:3000/${endpoint}/${id}`)
    .then(() => {
      callApi(endpoint, setData), alertMessage("success", "Product removed.");
    })
    .catch((error) => {
      if (error.response) console.warn("Error. Try Again Later.");
      else if (error.request) console.log(error.request);
      else console.log("Error", error.message);
    });
};
