const initializedState = {
  loading: true,
  loadingAddress: true,
  loadingList: true,
  deleteLoader: false,
  addres: "",
  id: "",
  basketLength: 0,
  details: null,
  allAddress: [],
  checkout: false
};
const factorReducer = (state = initializedState, action) => {
  switch (action.type) {
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
        basketLength: state.basketLength + 1
      };
    case "DELETE_FACTOR":
      return {
        loading: true,
        loadingAddress: true,
        loadingList: true,
        deleteLoader: false,
        addres: "",
        id: "",
        basketLength: 0,
        details: null,
        allAddress: [],
        checkout: true
      };
    case "CHECK_OUT":
      console.log("first");
      return {
        ...state,
        checkout: true
      };
    case "ADDRESS-DELETED":
      return {
        ...state,
        allAddress: action.data,
        loadingAddress: false
      };
    case "BASKET_DETAILS":
      console.log(action.data);
      return {
        ...state,
        details: action.data,
        basketLength: action.data.length,
        loading: false,
        loadingList: false
      };
    case "Incress_Details":
      const update = state.details.map((p) =>
        p.id === action.payload ? { ...p, p: p.qty++ } : p
      );

      return {
        ...state,
        details: update,
        loading: false
      };
    case "Decress_Details":
      const updateD = state.details.map((p) =>
        p.id === action.payload ? { ...p, p: p.qty-- } : p
      );

      return {
        ...state,
        details: updateD,
        loading: false
      };
    case "DELETE_LOADER":
      return {
        ...state,
        deleteLoader: true
      };
    case "DELETE_BASKET":
      return {
        ...state,
        details: action.product,
        basketLength: action.product.length,
        deleteLoader: false,
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
    case "lOADING_ADDRESS_FALSE":
      return {
        ...state,
        loadingAddress: false
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
    case "DELETE_BASKET_LEGTH":
      return {
        ...state,
        basketLength: 0
      };
    default:
      return state;
  }
};

export default factorReducer;
