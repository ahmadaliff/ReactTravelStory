import { put, takeLatest, call } from "redux-saga/effects";
import { GET_ALL_POST } from "./constants";
import { getAllPost } from "../../domain/Api";
import { setAllPost } from "./actions";

export function* doGetAllPost() {
  try {
    const response = yield call(getAllPost);
    yield put(setAllPost(response));
  } catch (error) {
    console.log(error);
  }
}

export default function* homeSaga() {
  yield takeLatest(GET_ALL_POST, doGetAllPost);
}
