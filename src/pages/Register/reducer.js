import { produce } from "immer";
import { CREATE_USER } from "./constants";
export const initialState = { users: [] };
const registerReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CREATE_USER:
        break;
    }
  });
export default registerReducer;
