const initialState = {
    preLoad:false,
    data:[]
}

const checkExistReduce = (state=initialState, action) => {
    switch(action.type){
        case'FETCHING_REQUEST':
            return {
                ...state,
                preLoad: true,
            }
        case'COMPLETED_REQUEST':
            return{
                preLoad:false,
                data: action.payload
            }
        case'FAILED':
            return{
                ...state,
                preLoad:false,
                errorMsg: action.payload
            }
        default:
            return state;
    }
}

export default checkExistReduce;
