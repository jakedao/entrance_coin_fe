import { SagaIterator } from "redux-saga";
import { all, call, put, takeEvery } from "redux-saga/effects";

import { getCoinList } from "../apis";
import {
  fetchCoinsFailure,
  fetchCoinsRequest,
  fetchCoinsSuccess,
} from "../slices/coinSlice";

import { ICoin } from "@/models";

function* handleFetchCoins$(): SagaIterator {
  try {
    const res: ICoin[] = yield call(getCoinList);
    yield put(fetchCoinsSuccess(res));
  } catch (e) {
    console.log(e);

    yield put(fetchCoinsFailure);
  }
}

function* coinSaga() {
  yield all([takeEvery(fetchCoinsRequest, handleFetchCoins$)]);
}

export default coinSaga;
