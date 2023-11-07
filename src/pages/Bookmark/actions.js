import {
  ADD_POST_BOOKMARK,
  DELETE_POST_BOOKMARK,
  GET_ALL_POST_BOOKMARK,
  SET_ALL_POST_BOOKMARK,
} from "./constants";

export const getAllPostBookmark = (id) => ({ type: GET_ALL_POST_BOOKMARK, id });
export const setAllPostBookmark = (posts) => ({
  type: SET_ALL_POST_BOOKMARK,
  posts,
});
export const addToBookmark = (data, id) => ({
  type: ADD_POST_BOOKMARK,
  data,
  id,
});
export const deleteFromBookmark = (id) => ({
  type: DELETE_POST_BOOKMARK,
  id,
});
