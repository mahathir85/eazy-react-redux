import axios from 'axios';
import { 
  FETCH_ITEM_DETAIL_REQUEST, 
  FETCH_ITEM_DETAIL_SUCCESS, 
  FETCH_ITEM_DETAIL_FAILURE 
} from './itemDetailTypes';

export const fetchItemDetail = (filter, item) => {
  return (dispatch) => {
    
    if(item && item.isLoaded){      
      const selectedData = item.items.data.find( (d) => {
        return d.id = filter;
      })
      dispatch(fetchItemDetailSuccess({data: selectedData}));      
    }
    else{
      dispatch(fetchItemDetailRequest())
      axios
        .get('http://5b35ede16005b00014c5dc86.mockapi.io/view/' + filter)
        .then(response => {
          //console.log(response.data)
          const items = response.data
          dispatch(fetchItemDetailSuccess(items))
        })
        .catch(error => {
          dispatch(fetchItemDetailFailure(error.message))
        })
    }

    
  }
}
 
export const fetchItemDetailRequest = () => {
    return {
        type: FETCH_ITEM_DETAIL_REQUEST
    }
}

export const fetchItemDetailSuccess = (items) => {
    return {
        type: FETCH_ITEM_DETAIL_SUCCESS,
        payload: items
    }
}

export const fetchItemDetailFailure = (error) => {
    return {
        type: FETCH_ITEM_DETAIL_FAILURE,
        payload: error
    }
}

