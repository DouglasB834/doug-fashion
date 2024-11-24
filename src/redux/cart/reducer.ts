import { ActionCartTypes } from "./actions";

export interface CartAction {
  type:
    | ActionCartTypes.ADD_PRODUCT_CART
    | ActionCartTypes.REMOVE_PRODUCT_CART
    | ActionCartTypes.INCREASE_PRODUCT_CART
    | ActionCartTypes.DECREASE_PRODUCT_CARD
    | ActionCartTypes.RESET_CART;

  payload: IProduct;
}

export interface IProduct {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity?: number;
  description: string;
}
export interface CartState {
  products: IProduct[];
  totalPrice: number;
}

const initialState: CartState = {
  products: [],
  totalPrice: 0,
};

type Action = CartAction;

const productInAlreadyIncard = (state: CartState, action: Action) => {
  return state.products.some((product) => product.id === action.payload.id);
};

const cartReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionCartTypes.ADD_PRODUCT_CART:
      productInAlreadyIncard(state, action);

      if (productInAlreadyIncard(state, action)) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity! + 1 }
              : product,
          ),
          totalPrice: state.totalPrice + action.payload.price,
        };
      }
      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
        totalPrice: state.totalPrice + action.payload.price,
      };

      console.log(action.payload);

    case ActionCartTypes.REMOVE_PRODUCT_CART:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.id,
        ),
        totalPrice: state.totalPrice - action.payload.price,
      };

    case ActionCartTypes.INCREASE_PRODUCT_CART:
      return {
        state,
        products: state.products.map((product) =>
          product.id == action.payload.id
            ? { ...product, quantity: product.quantity! + 1 }
            : product,
        ),
      };
    case ActionCartTypes.DECREASE_PRODUCT_CARD:
      return {
        state,
        products: state.products
          .map((productCart) => {
            if (productCart.id === action.payload.id) {
              return {
                ...productCart,
                quantity: productCart.quantity! - 1,
              };
            }
            return productCart;
          })
          .filter((item) => item.quantity! > 0),
      };
    case ActionCartTypes.RESET_CART: // Novo case
      return initialState;

    default:
      return state;
  }
};
export default cartReducer;
