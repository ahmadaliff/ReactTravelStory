import { takeLatest, call } from "redux-saga/effects";
import { CREATE_USER } from "./constants";
import { createUser, getAllUser } from "../../domain/Api";

export function* doCreateUser({ user, callback }) {
  try {
    const dataUser = yield call(getAllUser);
    if (!dataUser.filter((val) => val?.email === user.email).length > 0) {
      const response = yield call(createUser, user);
      callback({ response, status: 201 });
    } else {
      throw { name: "Error", message: "user with that email already exist" };
    }
  } catch (error) {
    callback({ message: error.message, status: false });
  }
}

export default function* registerSaga() {
  yield takeLatest(CREATE_USER, doCreateUser);
}
