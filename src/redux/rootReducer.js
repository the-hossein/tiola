import { combineReducers } from "redux";
import langReducer from "../redux/lang/langReducer";
import collectionReducer from "./collectionDetail/collectionReducer";
import commentReducer from "./comment/commentReducer";
import factorReducer from "./factor/factorReducer";
import productReducer from "./product/productReducer";
import rateReducer from "./rate/rateReducer";
import shopReducer from "./shop/shopReducer";
//get blogs
import blogReducer from "./blog/blogsReducer";
import registerReducer from "./register/registerReducer";

//get all products
import allProductsReducer from "./getallproducts/AllProductsReducer";

const rootReducer = combineReducers({
  stateLang: langReducer,
  stateComment: commentReducer,
  stateRate: rateReducer,
  stateFactor: factorReducer,
  stateProduct: productReducer,
  stateBlogs: blogReducer,
  stateColProduct: collectionReducer,
  stateShop: shopReducer,
  stateRegister: registerReducer,
  stateAllProducts: allProductsReducer,
});

export default rootReducer;
