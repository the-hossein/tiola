const initializedState = {
  loading: true,
  addres: "",
  id: "",
  basketLength: 0,
  details: [],
  allAddress: []
};
const factorReducer = (state = initializedState, action) => {
  switch (action.type) {
    case "GET_ADDRES":
      return { ...state, addres: action.addres };
    case "CHECKED_ADDRES":
      return {
        ...state,
        check: action.check
      };
    case "LOADER_FACTOR":
      return {
        ...state,
        loading: true
      };
    case "ADD_QTY_AMOUNT":
      return {
        ...state,
        basketLength: state.basketLength + 1
      };
    case "BASKET_DETAILS":
      return {
        ...state,
        details: action.data,
        basketLength: action.data.length,
        loading: false
      };

    case "DELETE_BASKET":
      return {
        ...state,
        details: action.product,
        basketLength: action.product.length,
        loading: false
      };
    case "SET_ALL_ADDRESS":
      return {
        ...state,
        allAddress: action.payload,
        loading:false
      };
    default:
      return state;
  }
};

export default factorReducer;
