import React, { Dispatch, SetStateAction } from "react";
import axios from "axios";

import { IProduct } from "../../interfaces/interfaces";
import { AlertMessage } from "../components/AlertMessage";

export function callApi(
  endpoint: string,
  setData: Dispatch<SetStateAction<IProduct[]>>,
  setLoading?: Dispatch<SetStateAction<boolean>>
) {
  axios
    .get<Array<IProduct>>(`http://localhost:3000/${endpoint}`)
    .then((res) => res)
    .then((responseJson) => {
      setData &&
        setData(
          endpoint.includes("products/") //don't sort if its an unique product
            ? responseJson.data
            : responseJson.data.sort(
                (a, b) => Number(a.price) - Number(b.price)
              )
        );
      setLoading && setLoading(false);
    })
    .catch((error) => {
      if (error.response) console.warn("Error. Try Again Later.");
      else if (error.request) console.log(error.request);
      else console.log("Error", error.message);
      setLoading && setLoading(true);
    });
}

export const insertItem = (
  endpoint: string,
  body: IProduct,
  setData: Dispatch<SetStateAction<IProduct[]>>
) => {
  axios
    .post(`http://localhost:3000/${endpoint}`, body)
    .then(() => {
      callApi(endpoint, setData);
      AlertMessage("success", `Product added to ${endpoint}!`);
    })
    .catch((err) => {
      const isItemAlreadyOnEndpoint = err.response.data.match(
        "Error: Insert failed, duplicate id"
      );
      err &&
        AlertMessage(
          "warning",
          `${
            isItemAlreadyOnEndpoint
              ? `This product is already on ${endpoint}!`
              : "Undefined, please contact system support."
          }`
        );
    });
};

export const deleteItem = (
  endpoint: string,
  id: string,
  setData: Dispatch<SetStateAction<IProduct[]>>
) => {
  axios
    .delete(`http://localhost:3000/${endpoint}/${id}`)
    .then(() => callApi(endpoint, setData));
};