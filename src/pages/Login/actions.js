import { GET_USER_BY_EMAIL, LOGOUT, SET_LOGIN } from "./constants";

export const loginUser = (user, callback) => ({
  type: GET_USER_BY_EMAIL,
  user,
  callback,
});
export const setLogin = (user) => ({
  type: SET_LOGIN,
  user,
});
export const LogoutUser = () => ({
  type: LOGOUT,
});
