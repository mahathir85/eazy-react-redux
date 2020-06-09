import { combineReducers } from 'redux';
import itemReducer from './items/itemReducer';
import itemDetailReducer from './itemdetails/itemDetailReducer';
import itemSimilarReducer from './itemsimilar/itemSimilarReducer';

const rootReducer = combineReducers({
    item: itemReducer,
    itemDetail: itemDetailReducer,
    itemSimilar: itemSimilarReducer 
});

export default rootReducer;