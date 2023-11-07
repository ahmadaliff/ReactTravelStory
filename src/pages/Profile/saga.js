import { put, takeLatest, call } from "redux-saga/effects";
import { GET_POSTS } from "./constants";
import { getPostByAuthorId } from "../../domain/Api";
import { setPostByAuthorId } from "./actions";

export function* doGetPostByAuthor({ id }) {
  try {
    const response = yield call(getPostByAuthorId, id);
    yield put(setPostByAuthorId(response));
  } catch (error) {
    console.log(error);
  }
}

export default function* profileSaga() {
  yield takeLatest(GET_POSTS, doGetPostByAuthor);
}
