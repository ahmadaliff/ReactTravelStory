import { produce } from "immer";
import { CREATE_POST } from "./constants";
export const initialState = { posts: [] };
const addPostReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CREATE_POST:
        break;
    }
  });
export default addPostReducer;
