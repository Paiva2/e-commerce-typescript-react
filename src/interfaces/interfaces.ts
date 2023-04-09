import { ReactNode } from "react";

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

export interface Props {
  children: ReactNode;
}

export const defaultContext = {
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
