import { produce } from "immer";
import {
  ADD_POST_BOOKMARK,
  DELETE_POST_BOOKMARK,
  GET_ALL_POST_BOOKMARK,
  SET_ALL_POST_BOOKMARK,
  SET_POST_BOOKMARK,
} from "./constants";
export const initialState = { bookmarks: [] };
const bookmarkReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_ALL_POST_BOOKMARK:
        draft.bookmarks = action.posts;
        break;
      case SET_POST_BOOKMARK:
        draft.bookmarks = [...state.bookmarks, action.post];
        break;
      case DELETE_POST_BOOKMARK:
        const temp = state.bookmarks.filter((val) => val.id != action.id);
        draft.bookmarks = temp;
        break;
    }
  });
export default bookmarkReducer;
