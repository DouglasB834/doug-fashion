import { Product } from "@/types";

export const computerProductPrice = ({ product }: { product: Product }) => {
  if (product.price === 0) {
    return { ...product, totalPrice: Number(product.price) };
  }
};
