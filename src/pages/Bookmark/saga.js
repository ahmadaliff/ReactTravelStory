import { put, takeLatest, call } from "redux-saga/effects";
import {
  ADD_POST_BOOKMARK,
  DELETE_POST_BOOKMARK,
  GET_ALL_POST_BOOKMARK,
} from "./constants";
import {
  addPostBookmark,
  deletePostBookmark,
  getAllPostBookmarkByid,
  getAllPostBookmarks,
} from "../../domain/Api";
import { setAllPostBookmark, setPostBookmark } from "./actions";

export function* doGetPostBookmark(id) {
  try {
    const response = yield call(getAllPostBookmarkByid, id.id);
    yield put(setAllPostBookmark(response));
  } catch (error) {
    console.log(error);
  }
}
export function* doAddPostBookmark(data) {
  try {
    const dataWithBookmarkUser = {
      bookmarkUserId: data.id,
      title: data.data.title,
      imageUrl: data.data.imageUrl,
      shortDescription: data.data.shortDescription,
      description: data.data.description,
      userId: data.data.userId,
      author: data.data.author,
      date: data.data.date,
      postId: data.data.id,
    };

    const dataBookmark = yield call(getAllPostBookmarks);
    if (
      !dataBookmark.filter(
        (val) =>
          val.bookmarkUserId == dataWithBookmarkUser.bookmarkUserId &&
          val.postId === dataWithBookmarkUser.postId
      ).length > 0
    ) {
      const response = yield call(addPostBookmark, dataWithBookmarkUser);
      yield put(setPostBookmark(response));
    }
  } catch (error) {
    console.log(error);
  }
}
export function* doDeletePostBookmark(data) {
  try {
    yield call(deletePostBookmark, data.id);
  } catch (error) {
    console.log(error);
  }
}

export default function* bookmarkSaga() {
  yield takeLatest(GET_ALL_POST_BOOKMARK, doGetPostBookmark);
  yield takeLatest(ADD_POST_BOOKMARK, doAddPostBookmark);
  yield takeLatest(DELETE_POST_BOOKMARK, doDeletePostBookmark);
}
