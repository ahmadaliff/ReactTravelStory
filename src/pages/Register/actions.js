import { CREATE_USER, GET_ALL_USER } from "./constants";

export const getAllUser = () => ({ type: GET_ALL_USER });
export const createUser = (user, callback) => ({
  type: CREATE_USER,
  user,
  callback,
});
