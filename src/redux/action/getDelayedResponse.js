import * as API from '../../common/APIActionType';
import axios from 'axios';

const fetchGetDelayedRequest = () => {
  return {
    type: API.FETCH_GET_DELAYED_RESPONSE_REQUEST,
  };
};
const fetchGetDelayedSuccess = (data) => {
  return {
    type: API.FETCH_GET_DELAYED_RESPONSE_SUCCESS,
    payload: data,
  };
};
const fetchGetDelayedFailure = (error) => {
  return {
    type: API.FETCH_GET_DELAYED_RESPONSE_FAILURE,
    payload: error,
  };
};

export const fetchGetDelayed = () => {
  return async (dispatch) => {
    dispatch(fetchGetDelayedRequest());
    try {
      const res = await axios.get(API.PATH_GET_LIST_RESOURCE);
      dispatch(fetchGetDelayedSuccess(res.data.data));
    } catch (error) {
      dispatch(fetchGetDelayedFailure(error.message));
    }
  };
};
