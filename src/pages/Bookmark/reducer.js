import { produce } from "immer";
import {
  ADD_POST_BOOKMARK,
  DELETE_POST_BOOKMARK,
  GET_ALL_POST_BOOKMARK,
  SET_ALL_POST_BOOKMARK,
} from "./constants";
export const initialState = { bookmarks: [] };
const bookmarkReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_ALL_POST_BOOKMARK:
        break;
      case SET_ALL_POST_BOOKMARK:
        draft.bookmarks = action.posts;
        break;
      case ADD_POST_BOOKMARK:
        const dataWithBookmarkUser = {
          bookmarkUserId: action.id,
          title: action.data.title,
          imageUrl: action.data.imageUrl,
          shortDescription: action.data.shortDescription,
          description: action.data.description,
          userId: action.data.userId,
          author: action.data.author,
          date: action.data.date,
          postId: action.data.id,
        };
        draft.bookmarks = [...state.bookmarks, dataWithBookmarkUser];
        break;
      case DELETE_POST_BOOKMARK:
        const temp = state.bookmarks.filter((val) => val.id != action.id);
        draft.bookmarks = temp;
        break;
    }
  });
export default bookmarkReducer;
