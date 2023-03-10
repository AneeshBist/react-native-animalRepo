import { all, put, select, takeLatest, delay } from "redux-saga/effects";
import * as actions from "../reducers";

export function* watchEditAnimal() {
  yield takeLatest(actions.editAnimal.toString(), takeEditAnimal);
}

export function* takeEditAnimal(action) {
  console.log("Starting fetch request to API -- EDIT");
  const animalID = action.payload;

  try {
    const fields = yield select((state) => state.animal.form.fields);
    const animals = yield select((state) => state.animal.list.animals);

    const result = animals.map((animal) => {
      if (animal.id !== animalID) return animal;

      return fields;
    });

    // pretend call to API
    yield delay(500);

    yield put(actions.editAnimalResult(result));
  } catch (error) {
    yield put(actions.editAnimalError(error.toString()));
  }
}
