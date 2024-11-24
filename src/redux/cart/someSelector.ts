import { RootState } from "../rootReducer";

export const SelectProductCount = (state: RootState) => {
  return state.cart.products.reduce(
    (total, product) => total + product.quantity!,
    0,
  );
};

export const SelectTotalPriceProduct = (state: RootState) => {
  return state.cart.products.reduce(
    (total, product) => total + product.price * product.quantity!,
    0,
  );
};
