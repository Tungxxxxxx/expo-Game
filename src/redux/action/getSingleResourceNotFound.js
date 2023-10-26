import axios from 'axios';
import * as API from '../../common/APIActionType';

const fetchGetSingleResourceNotFoundRequest = () => ({ type: API.FETCH_GET_SINGLE_RESOURCE_NOTFOUND_REQUEST });
const fetchGetSingleResourceNotFoundSuccess = (data) => ({
  type: API.FETCH_GET_SINGLE_RESOURCE_NOTFOUND_SUCCESS,
  payload: data,
});
const fetchGetSingleResourceNotFoundFailure = (error) => ({
  type: API.FETCH_GET_SINGLE_RESOURCE_NOTFOUND_FAILURE,
  payload: error,
});

export const fetchGetSingleResourceNotFound = () => {
  return async (dispatch) => {
    dispatch(fetchGetSingleResourceNotFoundRequest());
    try {
      const res = await axios.get(API.PATH_GET_SINGLE_RESOURCE_NOT_FOUND);
      dispatch(fetchGetSingleResourceNotFoundSuccess(res.data.data));
    } catch (error) {
      dispatch(fetchGetSingleResourceNotFoundFailure(error.message));
    }
  };
};
