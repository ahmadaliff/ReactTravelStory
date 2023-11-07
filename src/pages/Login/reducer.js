import { produce } from "immer";
import { GET_USER_BY_EMAIL, LOGOUT, SET_LOGIN } from "./constants";
export const initialState = { isLogin: false, dataUser: null };
const loginReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_LOGIN:
        draft.isLogin = true;
        draft.dataUser = action.user;
        break;
      case GET_USER_BY_EMAIL:
        break;
      case LOGOUT:
        draft.isLogin = false;
        break;
    }
  });
export default loginReducer;
