const initialState = {
    loader: false,
    data: []
}

const orderHistoryReducer = (state=initialState, action) => {
    switch(action.type) {
        case'REQUEST_GET':
            return {...state, loader:true}
        case'SUCCESS_REQUEST':
            return{
                loader:false,
                data: action.payload
            }
        case'FAILED':
            return{
                ...state,
                loader:false,
                errorMsg: action.payload
            }
        default: 
            return state;
    }
};

export default orderHistoryReducer;