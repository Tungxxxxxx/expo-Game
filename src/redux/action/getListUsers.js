import axios from 'axios';
import * as API from '../../common/APIActionType';
// Khai báo các action, trả về 1 đối tượng
const fetchGetListUsersSuccess = (data) => ({
  type: API.FETCH_GET_LIST_USERS_SUCCESS,
  payload: data,
});
const fetchGetListUsersRequest = () => ({
  type: API.FETCH_GET_LIST_USERS_REQUEST,
});
const fetchGetListUsersFailure = (error) => ({
  type: API.FETCH_GET_LIST_USERS_FAILURE,
  payload: error,
});

// dispatch các action, trả về 1 dispatch
export const fetchGetListUsers = () => {
  return async (dispatch) => {
    //Call request
    dispatch(fetchGetListUsersRequest());

    // bắt exception
    try {
      //Lấy data
      const res = await axios.get(API.PATH_GET_LIST_USERS);
      // dispatch(fetchGetListUsersSuccess(res.data.data));
      setTimeout(() => dispatch(fetchGetListUsersSuccess(res.data.data)), 1000);
    } catch (error) {
      dispatch(fetchGetListUsersFailure(error.message));
    }
  };
};

// Sau đó khai báo tại reducer
// settimeout: hàm sẽ được gọi sau khi chờ khoảng thời gian timeout
