const initialState = {
    items: []
};

const searchReducer = (state= initialState, action) => {
    switch(action.type){
         case'SEARCH':
            return {items: action.payload};
        default: 
            return state;
    }
}

export default searchReducer

