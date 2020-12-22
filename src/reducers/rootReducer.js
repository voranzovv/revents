import { combineReducers } from "redux";
import eventReducer from "../features/event/eventReducer";
import testReducer from "./../features/testArea/testReducer";

const rootReducer = combineReducers({
  events: eventReducer,
  test: testReducer,
});

export default rootReducer;
