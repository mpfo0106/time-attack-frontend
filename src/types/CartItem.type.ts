import { Good } from "./Good.type";

export type CartItem = {
  id: string;
  count: number;
  good: Good;
};
