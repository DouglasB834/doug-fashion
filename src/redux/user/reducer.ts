//onde vou criar o hook

import { ActionTypes } from "./actions";

//

export interface UserLoginAction {
  type: ActionTypes.USER_LOGIN | ActionTypes.USER_LOGOUT;
  payload: { email: string; password: string };
}

export interface UserState {
  currentUser: { email: string; password: string } | null;
}

type Action = UserLoginAction;

const initialState = {
  currentUser: { email: "", password: "" },
};

const userReducer = (
  state: UserState = initialState,
  action: Action,
): UserState => {
  switch (action.type) {
    case ActionTypes.USER_LOGIN:
      console.log("user login", action.payload);
      return {
        ...state,
        currentUser: action.payload,
      };
    case ActionTypes.USER_LOGOUT:
      console.log("user logout");
      return {
        ...state,
        currentUser: null,
      };

    default:
      return state;
  }
};

export default userReducer;
