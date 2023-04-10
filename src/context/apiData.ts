import React, { Dispatch, SetStateAction } from "react";
import axios from "axios";

import { IProduct } from "../interfaces/interfaces";

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
          responseJson.data.sort((a, b) => Number(a.price) - Number(b.price))
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
    .then(() => callApi(endpoint, setData));
};
