import { combineReducers } from "redux";
import  langReducer  from "../redux/lang/langReducer";

const rootReducer = combineReducers({
  stateLang: langReducer
});

export default rootReducer;
