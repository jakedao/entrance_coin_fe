import { all } from "redux-saga/effects";

import coinSaga from "./coinSaga";

export function* rootSaga() {
  yield all([coinSaga()]);
}
