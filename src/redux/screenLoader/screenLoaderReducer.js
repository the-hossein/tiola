const initializedState = {
  loadingScreen: false,
  loader: false
};

const screenLoaderReducer = (state = initializedState, action) => {
  switch (action.type) {
    case "SCREEN_LOADER":
      return {
        loadingScreen: action.status
      };
    case "LOADER":
      return { ...state, loader: action.status };
    default:
      return state;
  }
};

export default screenLoaderReducer;
