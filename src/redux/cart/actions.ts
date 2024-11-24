import { IProduct } from "./reducer";

export enum ActionCartTypes {
  ADD_PRODUCT_CART = "cart/addProductCart",
  INCREASE_PRODUCT_CART = "cart/increseProductCart",
  RESET_CART = "cart/resetCart",

  REMOVE_PRODUCT_CART = "cart/removeProductCart",
  DECREASE_PRODUCT_CARD = "cart/decreaseProductCard ",
}

export const addProductCart = (product: IProduct) => ({
  type: ActionCartTypes.ADD_PRODUCT_CART,
  payload: product,
});

export const increseProductCart = (product: IProduct) => ({
  type: ActionCartTypes.DECREASE_PRODUCT_CARD,
  payload: product,
});

export const removeProductCart = (product: IProduct) => ({
  type: ActionCartTypes.REMOVE_PRODUCT_CART,
  payload: product,
});

export const decreaseProductCard = (product: IProduct) => ({
  type: ActionCartTypes.INCREASE_PRODUCT_CART,
  payload: product,
});
export const resetCart = () => ({
  type: ActionCartTypes.RESET_CART,
});
