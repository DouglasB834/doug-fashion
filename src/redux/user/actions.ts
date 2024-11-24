export enum ActionTypes {
  USER_LOGIN = "user/login",
  USER_LOGOUT = "user/logout",
}

export const userLoginAction = (email: string, password: string) => {
  return {
    type: ActionTypes.USER_LOGIN,
    payload: {
      email,
      password,
    },
  };
};

export const LogoutAction = () => {
  return {
    type: ActionTypes.USER_LOGOUT,
  };
};
