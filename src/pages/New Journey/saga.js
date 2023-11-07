import { takeLatest, call } from "redux-saga/effects";
import { CREATE_POST } from "./constants";
import { createPost } from "../../domain/Api";

export function* doCreatePost({ post, callback }) {
  try {
    const postWithDate = { ...post, date: new Date().toISOString() };
    const response = yield call(createPost, postWithDate);
    callback({
      message: `berhasil menambahkan post : ${response.title}`,
      status: 201,
    });
  } catch (error) {
    console.log(error);
    callback({ message: error.message, status: false });
  }
}

export default function* addPostSaga() {
  yield takeLatest(CREATE_POST, doCreatePost);
}
