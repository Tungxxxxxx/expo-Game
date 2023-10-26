import axios from 'axios';
import {
  FETCH_GET_SINGLE_USER_REQUEST,
  FETCH_GET_SINGLE_USER_SUCCESS,
  FETCH_GET_SINGLE_USER_FAILURE,
  PATH_GET_SINGLE_USER,
} from '../../common/APIActionType';
const fetchGetSingleUserRequest = () => ({
  type: FETCH_GET_SINGLE_USER_REQUEST,
});
const fetchGetSingleUserSuccess = (data) => ({
  type: FETCH_GET_SINGLE_USER_SUCCESS,
  payload: data,
});
const fetchSingleUserFailure = (error) => ({
  type: FETCH_GET_SINGLE_USER_FAILURE,
  payload: error,
});

export const fetchGetSingleUser = () => {
  return async (dispatch) => {
    dispatch(fetchGetSingleUserRequest());
    try {
      const res = await axios.get(PATH_GET_SINGLE_USER);
      dispatch(fetchGetSingleUserSuccess(res.data.data));
    } catch (error) {
      dispatch(fetchSingleUserFailure(error.message));
    }
  };
};
