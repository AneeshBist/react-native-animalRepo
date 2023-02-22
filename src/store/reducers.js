import animal from "../components/feature/animal/reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  animal,
});

export default rootReducer;
