import { combineReducers } from "redux";
import langReducer from "../redux/lang/langReducer";
import collectionReducer from "./collectionDetail/collectionReducer";
import commentReducer from "./comment/commentReducer";
import factorReducer from "./factor/factorReducer";
import productReducer from "./product/productReducer";
import rateReducer from "./rate/rateReducer";
import shopReducer from "./shop/shopReducer";
import signReducer from "./sign/signReducer";
//get blogs
import blogReducer from "./blog/blogsReducer";

const rootReducer = combineReducers({
  stateLang: langReducer,
  stateComment: commentReducer,
  stateRate: rateReducer,
  stateSign: signReducer,
  stateFactor: factorReducer,
  stateProduct: productReducer,
  stateBlogs: blogReducer,
  stateColProduct: collectionReducer,
  stateShop: shopReducer
});

export default rootReducer;
