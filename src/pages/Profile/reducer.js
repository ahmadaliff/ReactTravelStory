import { produce } from "immer";
import { GET_POSTS, SET_POSTS } from "./constants";
export const initialState = { posts: [] };
const profileReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_POSTS:
        break;
      case SET_POSTS:
        draft.posts = action.posts;
        break;
    }
  });
export default profileReducer;
