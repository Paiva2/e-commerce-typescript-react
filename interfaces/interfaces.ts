import { ReactNode, Dispatch, SetStateAction } from "react";

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  rating: number;
  filterParams: {
    colors: Array<string>;
    genre: Array<string>;
  };
}

export interface IProductContext {
  data: IProduct[];
  loading: boolean;
  searchValue: string;
  currentPage: number;
  totalPages: number[];
  initialPage: number;
  finalPage: number;
  setSearchValue: Dispatch<SetStateAction<string>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export interface ICartContext {
  cartData: IProduct[];
  loading: boolean;
  setCartData: Dispatch<SetStateAction<IProduct[]>>;
}

export interface IWishListContext {
  wishListData: IProduct[];
  loading: boolean;
  setWishListData: Dispatch<SetStateAction<IProduct[]>>;
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
      filterParams: {
        colors: [],
        genre: [],
      },
    },
  ],
  searchValue: "",
  loading: true,
  currentPage: 0,
  totalPages: [],
  initialPage: 0,
  finalPage: 0,
  setSearchValue: () => "",
  setCurrentPage: () => 0,
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
      filterParams: {
        colors: [],
        genre: [],
      },
    },
  ],
  loading: true,
  setCartData: () => [],
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
      filterParams: {
        colors: [],
        genre: [],
      },
    },
  ],
  loading: true,
  setWishListData: () => [],
} as IWishListContext;

export const productBodyDefault = {
  id: "",
  name: "",
  description: "",
  price: 0,
  image: "",
  quantity: 0,
  rating: 0,
  filterParams: {
    colors: [],
    genre: [],
  },
};
