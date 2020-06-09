import { 
    FETCH_ITEM_DETAIL_REQUEST, 
    FETCH_ITEM_DETAIL_SUCCESS, 
    FETCH_ITEM_DETAIL_FAILURE
} from './itemDetailTypes';

const initialState = {
    details: {},
    loading: false,
    error: ''
}

const itemDetailReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_ITEM_DETAIL_REQUEST:
            return {
                ...state,
                loading: true
            }
        
        case FETCH_ITEM_DETAIL_SUCCESS:               
            return {
                loading: false,
                details: action.payload,
                error: ''
            }
        
        case FETCH_ITEM_DETAIL_FAILURE:
            return {
                loading: false,
                details: {},
                error: action.payload
            }

        default: 
            return state;
    }
}

export default itemDetailReducer;