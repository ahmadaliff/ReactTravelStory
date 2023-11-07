import { takeLatest, call, put } from "redux-saga/effects";
import { GET_USER_BY_EMAIL } from "./constants";
import { getUserByEmail } from "../../domain/Api";
import { setLogin } from "./actions";

export function* doVerifyUSer({ user, callback }) {
  try {
    const dataUser = yield call(getUserByEmail, user.email);
    if (dataUser.length > 0) {
      const response =
        dataUser[0]?.email === user.email &&
        dataUser[0]?.password === user.password;
      if (response) {
        yield put(setLogin(dataUser[0]));
        callback({
          message: `berhasil login dengan akun : ${user.email}`,
          status: 200,
        });
      } else {
        throw {
          name: "Error",
          message: "email or password not match",
        };
      }
    } else {
      throw {
        name: "Error",
        message: "user with that email not exist",
      };
    }
  } catch (error) {
    callback({ message: error.message, status: false });
  }
}

export default function* loginSaga() {
  yield takeLatest(GET_USER_BY_EMAIL, doVerifyUSer);
}
