import { 
    FETCH_ITEM_SIMILAR_REQUEST, 
    FETCH_ITEM_SIMILAR_SUCCESS, 
    FETCH_ITEM_SIMILAR_FAILURE
} from './itemSimilarTypes';

const initialState = {
    similar: [],
    loading: false,
    error: ''
}

const itemSimilarReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_ITEM_SIMILAR_REQUEST:
            return {
                ...state,
                loading: true
            }
        
        case FETCH_ITEM_SIMILAR_SUCCESS:               
            return {
                loading: false,
                similar: action.payload,
                error: ''
            }
        
        case FETCH_ITEM_SIMILAR_FAILURE:
            return {
                loading: false,
                similar: {},
                error: action.payload
            }

        default: 
            return state;
    }
}

export default itemSimilarReducer;