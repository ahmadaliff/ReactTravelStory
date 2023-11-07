import { all } from "redux-saga/effects";
import homeSaga from "./pages/Home/saga";
import registerSaga from "./pages/Register/saga";
import loginSaga from "./pages/Login/saga";
import detailSaga from "./pages/Detail/saga";
import profileSaga from "./pages/Profile/saga";
import addPostSaga from "./pages/New Journey/saga";
import bookmarkSaga from "./pages/Bookmark/saga";
export default function* rootSaga() {
  yield all([
    homeSaga(),
    registerSaga(),
    loginSaga(),
    detailSaga(),
    profileSaga(),
    addPostSaga(),
    bookmarkSaga(),
  ]);
}
