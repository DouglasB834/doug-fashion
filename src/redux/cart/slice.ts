import { createSlice } from "@reduxjs/toolkit";

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

const productAlreadyInCart = (state: CartState, productId: string) => {
  console.log(state.products);
  return state.products.some((product) => product.id === productId);
};
console.log(initialState);

const carSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      console.log(action, state);
      const productExists = productAlreadyInCart(state, action.payload.id);

      if (productExists) {
        state.products = state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity! + 1 }
            : product,
        );
        state.totalPrice += action.payload.price;
        return;
      }
      state.products = [...state.products, { ...action.payload, quantity: 1 }];
      state.totalPrice += action.payload.price;
    },
    incrementProductCart: (state, action) => {
      state.products = state.products.map((product) =>
        product.id == action.payload.id
          ? { ...product, quantity: product.quantity! + 1 }
          : product,
      );
    },
    removeProductCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id,
      );
      state.totalPrice =
        state.totalPrice - action.payload.price * action.payload.quantity || 1;
    },
    decreaseProductCard: (state, action) => {
      state.products = state.products
        .map((productCart) => {
          if (productCart.id === action.payload.id) {
            return {
              ...productCart,
              quantity: productCart.quantity! - 1,
            };
          }
          return productCart;
        })
        .filter((item) => item.quantity! > 0);
    },
    resetCart: (state) => {
      state.products = [];
      state.totalPrice = 0;
    },
  },
});

export const {
  addProduct,
  incrementProductCart,
  removeProductCart,
  decreaseProductCard,
  resetCart,
} = carSlice.actions;

export default carSlice.reducer;
