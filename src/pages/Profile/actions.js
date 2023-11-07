import { GET_POSTS, SET_POSTS } from "./constants";

export const getPostByAuthorId = (id) => ({ type: GET_POSTS, id });
export const setPostByAuthorId = (posts) => ({ type: SET_POSTS, posts });
