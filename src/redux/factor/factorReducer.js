const initializedState = {
  loading: true,
  loadingAddress: true,
  loadingList: true,
  addres: "",
  id: "",
  basketLength: 0,
  details: [],
  allAddress: [],
  selectedItem: [],
  itemsCounter: 0,
  totalPrice: 0,
};
const sumItems = (items) => {
  const itemCounter = items.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const total = items
    .reduce((total, product) => product.quantity * product.price + total, 0)
    .toFixed(2);
  return { itemsCounter: itemCounter, totalPrice: total };
};

const factorReducer = (state = initializedState, action) => {
  switch (action.type) {
    case "INCREASE_ITEM":
      const indexI = state.details.findIndex(
        (item) => item.id === action.payload.id
      );
      state.details[indexI].quantity++;
      console.log(state.details)
      return { ...state, ...sumItems(state.details) };
    case "GET_ADDRES":
      return { ...state, addres: action.addres };
    case "CHECKED_ADDRES":
      return {
        ...state,
        check: action.check,
        loadingAddress: false
      };
    case "LOADER_FACTOR":
      return {
        ...state,
        loading: true
      };
    case "ADD_QTY_AMOUNT":
      return {
        ...state,
        basketLength: state.basketLength + 1,
        loadingList: false
      };
    case "BASKET_DETAILS":
      return {
        ...state,
        details: action.data,
        basketLength: action.data.length,
        loading: false,
        loadingList:false
      };

    case "DELETE_BASKET":
      return {
        ...state,
        details: action.product,
        basketLength: action.product.length,
        loading: false,
        loadingList: false
      };
    case "SET_ALL_ADDRESS":
      return {
        ...state,
        allAddress: action.payload,
        loading: false,
        loadingAddress: false
      };
    case "lOADING_ADDRESS":
      return {
        ...state,
        loadingAddress: true
      };
    case "lOADING_LIST":
      return {
        ...state,
        loadingList: true
      };
        case "lOADING_LIST_FALSE":
      return {
        ...state,
        loadingList: false
      };
      
    default:
      return state;
  }
};

export default factorReducer;
