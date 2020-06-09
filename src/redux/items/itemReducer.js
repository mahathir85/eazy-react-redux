import { 
    FETCH_ITEM_REQUEST, 
    FETCH_ITEM_SUCCESS, 
    FETCH_ITEM_FAILURE, 
    SET_CURRENT_ITEM_DETAILS,
    SET_ISLOADED_STATE
} from './itemTypes';


const initialState = {
    items: [],
    currentItemDetails: [],
    loading: false,
    isLoaded: false,    
    error: ''
}

const itemReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_ISLOADED_STATE:
            return {
                ...state,
                isLoaded: false
            }

        case FETCH_ITEM_REQUEST:
            return {
                ...state,
                loading: true,
                isLoaded: false
            }
        
        case FETCH_ITEM_SUCCESS:            
            return {
                loading: false,
                items: action.payload,
                error: '',
                isLoaded: true
            }
        
        case FETCH_ITEM_FAILURE:
            return {
                loading: false,
                items: [],
                error: action.payload,
                isLoaded: false
            }
        
        case SET_CURRENT_ITEM_DETAILS:
            return {
                ...state,
                currentItemDetails: state.items.data.filter( (d) => {
                    return d.attributes.links.self === action.payload
                })[0]
            }
            
        
        default: 
            return state;
    }
}

export default itemReducer;