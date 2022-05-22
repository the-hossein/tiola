import { combineReducers } from "redux";
import langReducer from "../redux/lang/langReducer";
import commentReducer from "./comment/commentReducer";
import rateReducer from "./rate/rateReducer";
import signReducer from "./sign/signReducer";

const rootReducer = combineReducers({
  stateLang: langReducer,
  stateComment: commentReducer,
  stateRate: rateReducer,
  stateSign: signReducer
});

export default rootReducer;
