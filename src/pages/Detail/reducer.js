import { produce } from "immer";
import { GET_POST, SET_POST } from "./constants";
export const initialState = { post: {} };
const detailReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_POST:
        break;
      case SET_POST:
        draft.post = action.post;
        break;
    }
  });
export default detailReducer;
