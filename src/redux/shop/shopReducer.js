const initializedState = {
  loading: true,
  data: []
};
const shopReducer = (state = initializedState, action) => {
  switch (action.type) {

    case "GET_SHOP_CATEGORY":
      return {
        ...state,
        data: action.data,
        loading: false
      };
    default:
      return state;
  }
};

export default shopReducer;
