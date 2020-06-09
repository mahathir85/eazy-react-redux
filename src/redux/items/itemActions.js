import axios from 'axios';
import { 
  FETCH_ITEM_REQUEST, 
  FETCH_ITEM_SUCCESS, 
  FETCH_ITEM_FAILURE,
  SET_ISLOADED_STATE 
} from './itemTypes';

export const setIsloadedState = () => {
  return {
    type: SET_ISLOADED_STATE
  }
}

export const fetchItems = () => {
  return (dispatch) => {
    dispatch(fetchItemRequest())
    axios
      .get('http://5b35ede16005b00014c5dc86.mockapi.io/list')
      .then(response => {
        const items = response.data
        dispatch(fetchItemSuccess(items))
      })
      .catch(error => {
        dispatch(fetchItemFailure(error.message))
      })
  }
}
 
export const fetchItemRequest = () => {
    return {
        type: FETCH_ITEM_REQUEST
    }
}

export const fetchItemSuccess = (items) => {
    return {
        type: FETCH_ITEM_SUCCESS,
        payload: items
    }
}

export const fetchItemFailure = (error) => {
    return {
        type: FETCH_ITEM_FAILURE,
        payload: error
    }
}

