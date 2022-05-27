import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

<<<<<<< HEAD
export const store = createStore(rootReducer, applyMiddleware(logger, thunk));
=======
export const store = createStore(rootReducer, applyMiddleware( logger,thunk));
>>>>>>> 2c0bfa123fc73a95ddb2d2309cdca43469128f64
