import { put, takeLatest, call } from "redux-saga/effects";
import { GET_POST } from "./constants";
import { getPostById } from "../../domain/Api";
import { setPostById } from "./actions";

export function* doGetPost({ id }) {
  try {
    const response = yield call(getPostById, id);
    if (response) {
      yield put(setPostById(response[0]));
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* detailSaga() {
  yield takeLatest(GET_POST, doGetPost);
}
