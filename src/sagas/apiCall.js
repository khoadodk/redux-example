import { takeEvery, call, put } from "redux-saga/effects";
// should import action types here

export default function* watcherSaga() {
  yield takeEvery("DATA_REQUESTED", workerSaga);
}

function* workerSaga() {
  try {
    const payload = yield call(callData);
    yield put({ type: "USER_LOADED", payload });
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e });
  }
}

function callData() {
  return fetch("https://jsonplaceholder.typicode.com/users").then(response =>
    response.json()
  );
}
