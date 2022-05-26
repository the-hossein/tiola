const initialState = [];

const blogReducer = (state=initialState,action) => {
    switch(action.type) {
        case 'FETCH_DATA':
            return action.payload;
        default:
            return state;
    }
}