import { all, select, put, takeLatest, delay } from "redux-saga/effects";
import * as actions from "../reducers";
//import * as services from "../services";

export function* watchCreateAnimal() {
  yield takeLatest(actions.createAnimal.toString(), takeCreateAnimal);
}

export function* takeCreateAnimal() {
  console.log("starting fetch request to API");
  try {
    const fields = yield select((state) => state.animal.form.fields);
    console.log("fields: ", fields);
    const animals = yield select((state) => state.animal.list.animals);
    console.log("animals: ", animals);

    const animal = {
      id: animals.length + 1,
      ...fields,
    };

    yield delay(500);

    const result = [animal, ...animals];

    yield put(actions.createAnimalResult(result));
  } catch (error) {
    yield put(actions.createAnimalError(error.toString()));
  }
}
