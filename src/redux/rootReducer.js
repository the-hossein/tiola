import { combineReducers } from "redux";
import langReducer from "../redux/lang/langReducer";
import commentReducer from "./comment/commentReducer";
import rateReducer from "./rate/rateReducer";

const rootReducer = combineReducers({
  stateLang: langReducer,
  stateComment: commentReducer,
  stateRate: rateReducer
});

export default rootReducer;
