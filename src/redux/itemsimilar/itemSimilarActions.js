import axios from 'axios';
import { 
  FETCH_ITEM_SIMILAR_REQUEST, 
  FETCH_ITEM_SIMILAR_SUCCESS, 
  FETCH_ITEM_SIMILAR_FAILURE 
} from './itemSimilarTypes';

export const fetchItemSimilar = (filter) => {
  return (dispatch) => {
    dispatch(fetchItemSimilarRequest())
    axios
      .get('http://5b35ede16005b00014c5dc86.mockapi.io/similar/' + filter)
      .then(response => {
        //console.log(response.data)
        const items = response.data
        dispatch(fetchItemSimilarSuccess(items))
      })
      .catch(error => {
        dispatch(fetchItemSimilarFailure(error.message))
      })
  }
}
 
export const fetchItemSimilarRequest = () => {
    return {
        type: FETCH_ITEM_SIMILAR_REQUEST
    }
}

export const fetchItemSimilarSuccess = (items) => {
    return {
        type: FETCH_ITEM_SIMILAR_SUCCESS,
        payload: items
    }
}

export const fetchItemSimilarFailure = (error) => {
    return {
        type: FETCH_ITEM_SIMILAR_FAILURE,
        payload: error
    }
}

