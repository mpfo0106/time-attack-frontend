import { Product } from "./Product.type";

export type CartItem = {
  id: string;
  count: number;
  good: Product;
};
