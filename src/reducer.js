import { combineReducers } from "redux";
import homeReducer from "./pages/Home/reducer";
import registerReducer from "./pages/Register/reducer";
import loginReducer from "./pages/Login/reducer";
import detailReducer from "./pages/Detail/reducer";
import profileReducer from "./pages/Profile/reducer";
import addPostReducer from "./pages/New Journey/reducer";
import bookmarkReducer from "./pages/Bookmark/reducer";

const rootReducer = combineReducers({
  homeReducer: homeReducer,
  registerReducer: registerReducer,
  loginReducer: loginReducer,
  detailReducer: detailReducer,
  profileReducer: profileReducer,
  addPostReducer: addPostReducer,
  bookmarkReducer: bookmarkReducer,
});
export default rootReducer;
