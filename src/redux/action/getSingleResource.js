import * as API from '../../common/APIActionType';
import axios from 'axios';

const fetchGetSingleResourceRequest = () => {
  return {
    type: API.FETCH_GET_SINGLE_RESOURCE_REQUEST,
  };
};
const fetchGetSingleResourceSuccess = (data) => {
  return {
    type: API.FETCH_GET_SINGLE_RESOURCE_SUCCESS,
    payload: data,
  };
};
const fetchGetSingleResourceFailure = (error) => {
  return {
    type: API.FETCH_GET_SINGLE_RESOURCE_FAILURE,
    payload: error,
  };
};

export const fetchGetSingleResource = () => {
  return async (dispatch) => {
    dispatch(fetchGetSingleResourceRequest());
    try {
      const res = await axios.get(API.PATH_GET_SINGLE_RESOURCE);
      dispatch(fetchGetSingleResourceSuccess(res.data.data));
    } catch (error) {
      dispatch(fetchGetSingleResourceFailure(error.message));
    }
  };
};
