const initializedState = {
  loading: true,
  data: []
};
const collectionReducer = (state = initializedState, action) => {
  switch (action.type) {
    case "GET_COLLECTION_PRODUCT":
      return { ...state, data: action.data, loading: false };

    default:
      return state;
  }
};

export default collectionReducer;
