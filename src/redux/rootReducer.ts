import { combineReducers } from "redux";

import carSlice from "./cart/slice";
import userReducer from "./user/reducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: carSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
