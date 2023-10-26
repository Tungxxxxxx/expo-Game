import {
  FETCH_GET_SINGLE_USER_NOT_FOUND_REQUEST,
  FETCH_GET_SINGLE_USER_NOT_FOUND_SUCCESS,
  FETCH_GET_SINGLE_USER_NOT_FOUND_FAILURE,
  PATH_GET_SINGLE_USER_NOT_FOUND,
} from '../../common/APIActionType';
import axios from 'axios';

const fetchGetSingleUserNotFoundRequest = () => {
  return {
    type: FETCH_GET_SINGLE_USER_NOT_FOUND_REQUEST,
  };
};
const fetchGetSingleUserNotFoundSuccess = (data) => {
  return {
    type: FETCH_GET_SINGLE_USER_NOT_FOUND_SUCCESS,
    payload: data,
  };
};
const fetchGetSingleUserNotFoundFailure = (error) => {
  return {
    type: FETCH_GET_SINGLE_USER_NOT_FOUND_FAILURE,
    payload: error,
  };
};
export const fetchGetSingleUserNotFound = () => {
  return async (dispatch) => {
    dispatch(fetchGetSingleUserNotFoundRequest());
    try {
      const res = await axios.get(PATH_GET_SINGLE_USER_NOT_FOUND);
      const data = res.data.data;
      dispatch(fetchGetSingleUserNotFoundSuccess(data));
    } catch (error) {
      dispatch(fetchGetSingleUserNotFoundFailure(error.message));
    }
  };
};
