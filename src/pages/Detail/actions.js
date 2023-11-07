import { GET_POST, SET_POST } from "./constants";

export const getPostById = (id) => ({ type: GET_POST, id });
export const setPostById = (post) => ({ type: SET_POST, post });
