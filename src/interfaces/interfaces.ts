import React, { ReactNode, Dispatch, SetStateAction } from "react";

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  rating: number;
  colors: Array<string>;
}

export interface IProductContext {
  data: IProduct[];
  loading: boolean;
}

export interface ICartContext {
  cartData: IProduct[];
  setCartData: Dispatch<SetStateAction<IProduct[]>>;
  loading: boolean;
}

export interface Props {
  children: ReactNode;
}

export const productDefault = {
  data: [
    {
      id: "",
      name: "",
      description: "",
      price: 0,
      image: "",
      quantity: 0,
      rating: 0,
      colors: [],
    },
  ],
  loading: true,
} as IProductContext;

const cartData = [
  {
    id: "",
    name: "",
    description: "",
    price: 0,
    image: "",
    quantity: 0,
    rating: 0,
    colors: [],
  },
];

//! NEED A FIX LATER ON SETCARTDATA
export const cartDefault = {
  cartData,
  setCartData: () => [],
  loading: true,
} as ICartContext;
