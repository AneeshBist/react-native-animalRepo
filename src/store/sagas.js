import { all } from "redux-saga/effects";
import animal from "../components/feature/animal/sagas";

export default function* rootSaga() {
  yield all([animal()]);
}
