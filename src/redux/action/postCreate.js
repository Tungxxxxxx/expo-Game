import * as API from '../../common/APIActionType';
import axios from 'axios';

const fetchPostCreateRequest = () => {
  return {
    type: API.FETCH_POST_CREATE_REQUEST,
  };
};
const fetchPostCreateSuccess = (data) => {
  return {
    type: API.FETCH_POST_CREATE_SUCCESS,
    payload: data,
  };
};
const fetchPostCreateFailure = (error) => {
  return {
    type: API.FETCH_POST_CREATE_FAILURE,
    payload: error,
  };
};

export const fetchPostCreate = (dataInput) => {
  return async (dispatch) => {
    dispatch(fetchPostCreateRequest());
    try {
      const res = await axios.post(API.PATH_POST_CREATE, dataInput);
      dispatch(fetchPostCreateSuccess(res.data));
    } catch (error) {
      dispatch(fetchPostCreateFailure(error.message));
    }
  };
};
