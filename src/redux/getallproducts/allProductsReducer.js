const initialState = {
    error: "",
    loader: false,
    data: []
}

const allProductsReducer = (state=initialState, action) => {
    switch(action.type) {
        case'GET_DATA':
            return{...state, loader: true}
        case'FETCH_DATA_SUCCESS':
            return{loader:false, data: action.payload}
        case'FAILED_FETCH':
            return{...state, loader: false, error: action.payload}
        default:
            return state;
    }
}

export default allProductsReducer;