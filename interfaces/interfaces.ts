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
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

export interface ICartContext {
  cartData: IProduct[];
  setCartData: Dispatch<SetStateAction<IProduct[] | IProduct>>;
  loading: boolean;
}

export interface IWishListContext {
  wishListData: IProduct[];
  setWishListData: Dispatch<SetStateAction<IProduct[] | IProduct>>;
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
  setSearchValue: () => "",
  searchValue: "",
  loading: true,
} as IProductContext;

export const cartDefault = {
  cartData: [
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
  setCartData: () => [],
  loading: true,
} as ICartContext;

export const wishListDefault = {
  wishListData: [
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
  setWishListData: () => [],
  loading: true,
} as IWishListContext;
