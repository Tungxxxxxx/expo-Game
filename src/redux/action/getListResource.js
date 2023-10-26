import * as API from '../../common/APIActionType';
import axios from 'axios';

const fetchGetListResourceRequest = () => {
  return {
    type: API.FETCH_GET_LIST_RESOURCE_REQUEST,
  };
};
const fetchGetListResourceSuccess = (data) => {
  return {
    type: API.FETCH_GET_LIST_RESOURCE_SUCCESS,
    payload: data,
  };
};
const fetchGetListResourceFailure = (error) => {
  return {
    type: API.FETCH_GET_LIST_RESOURCE_FAILURE,
    payload: error,
  };
};

export const fetchGetListResource = () => {
  return async (dispatch) => {
    dispatch(fetchGetListResourceRequest());
    try {
      const res = await axios.get(API.PATH_GET_LIST_RESOURCE);
      dispatch(fetchGetListResourceSuccess(res.data.data));
    } catch (error) {
      dispatch(fetchGetListResourceFailure(error.message));
    }
  };
};
